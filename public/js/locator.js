// 151 Coffee store locator - Leaflet + OpenStreetMap, no API key required.
const STORES = [
    {
        "name": "151 Coffee North Richland Hills",
        "address": "6244 Rufe Snow Dr",
        "city": "North Richland Hills",
        "state": "TX",
        "zip": "76148",
        "lat": 32.8580904,
        "lng": -97.2378174
    },
    {
        "name": "151 Coffee Flower Mound",
        "address": "3343 Long Prairie Rd",
        "city": "Flower Mound",
        "state": "TX",
        "zip": "75022",
        "lat": 33.0309506,
        "lng": -97.0705513
    },
    {
        "name": "151 Coffee Plano",
        "address": "1151 Preston Rd",
        "city": "Plano",
        "state": "TX",
        "zip": "75093",
        "lat": 33.041912,
        "lng": -96.7943275
    },
    {
        "name": "151 Coffee Roanoke",
        "address": "1200 US-377",
        "city": "Roanoke",
        "state": "TX",
        "zip": "76262",
        "lat": 33.0125118,
        "lng": -97.2200814
    },
    {
        "name": "151 Coffee Alliance",
        "address": "9301 N Fwy",
        "city": "Fort Worth",
        "state": "TX",
        "zip": "76177",
        "lat": 32.8056952,
        "lng": -97.275202
    },
    {
        "name": "151 Coffee Lewisville",
        "address": "720 W Main St",
        "city": "Lewisville",
        "state": "TX",
        "zip": "75067",
        "lat": 33.0458472,
        "lng": -97.0111036
    },
    {
        "name": "151 Coffee Coppell",
        "address": "131 S Denton Tap Rd",
        "city": "Coppell",
        "state": "TX",
        "zip": "75019",
        "lat": 32.9679663,
        "lng": -96.9941574
    },
    {
        "name": "151 Coffee Keller",
        "address": "1510 Keller Pkwy",
        "city": "Keller",
        "state": "TX",
        "zip": "76248",
        "lat": 32.933998,
        "lng": -97.2174392
    },
    {
        "name": "151 Coffee Rowlett",
        "address": "3525 Lakeview Pkwy",
        "city": "Rowlett",
        "state": "TX",
        "zip": "75088",
        "lat": 32.907404,
        "lng": -96.567121
    },
    {
        "name": "151 Coffee Burleson",
        "address": "1484 SW Wilshire Blvd",
        "city": "Burleson",
        "state": "TX",
        "zip": "76028",
        "lat": 32.5209435,
        "lng": -97.3477463
    },
    {
        "name": "151 Coffee Westworth Village",
        "address": "6720 Westworth Blvd",
        "city": "Westworth Village",
        "state": "TX",
        "zip": "76114",
        "lat": 32.7642639,
        "lng": -97.4099758
    },
    {
        "name": "151 Coffee Lawrence",
        "address": "1533 W 23rd St",
        "city": "Lawrence",
        "state": "KS",
        "zip": "66046",
        "lat": 38.9424193,
        "lng": -95.2543922
    },
    {
        "name": "151 Coffee The Colony",
        "address": "4580 Destination Dr",
        "city": "The Colony",
        "state": "TX",
        "zip": "75056",
        "lat": 33.079624,
        "lng": -96.8562017
    },
    {
        "name": "151 Coffee Manhattan",
        "address": "900 N 3rd St",
        "city": "Manhattan",
        "state": "KS",
        "zip": "66502",
        "lat": 39.1880443,
        "lng": -96.5598186
    },
    {
        "name": "151 Coffee Overland Park",
        "address": "9180 Metcalf Ave",
        "city": "Overland Park",
        "state": "KS",
        "zip": "66212",
        "lat": 38.9624981,
        "lng": -94.6677576
    }
];

(function () {
    const mapEl = document.getElementById("locator-map");
    const listEl = document.getElementById("locator-list");
    const searchEl = document.getElementById("locator-search");
    if (!mapEl || !listEl || !searchEl || typeof L === "undefined") return;

    // Store hours — same for every location (static for now). Change this one
    // line to update all locations, or swap to the Google Places API later.
    const HOURS = "Open daily 6 AM - 8 PM";

    const redIcon = L.divIcon({
        className: "locator__marker",
        html: '<span class="locator__marker-pin"></span>',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28]
    });

    const map = L.map(mapEl, { scrollWheelZoom: false }).setView([33.0, -97.0], 6);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        subdomains: "abcd",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    const markers = STORES.map((store, i) => {
        const marker = L.marker([store.lat, store.lng], { icon: redIcon }).addTo(map);
        marker.bindPopup(`<strong>${store.name}</strong><br>${store.address}<br>${store.city}, ${store.state} ${store.zip}<br>${HOURS}<br><a href="tel:+16823252124">(682) 325-2124</a>`);
        marker.on("click", () => setActive(i, true));
        return marker;
    });

    const bounds = L.latLngBounds(STORES.map(s => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [30, 30] });

    function directionsUrl(store) {
        return `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`;
    }

    // origin (optional) = [lat, lng] of the searched location; when present we
    // show each store's distance and assume `stores` is already sorted nearest-first.
    function renderList(stores, origin) {
        listEl.innerHTML = "";
        if (!stores.length) stores = STORES; // never leave the list empty
        stores.forEach((store) => {
            const originalIndex = STORES.indexOf(store);
            const item = document.createElement("div");
            item.className = "locator__item";
            item.dataset.index = String(originalIndex);
            const dist = origin
                ? `<span class="locator__dist">${haversineMiles(origin[0], origin[1], store.lat, store.lng).toFixed(1)} mi</span>`
                : "";
            item.innerHTML = `
                <div class="locator__item-info">
                    <h3>${store.name.replace("151 Coffee ", "")}${dist}</h3>
                    <p>${store.address}<br>${store.city}, ${store.state} ${store.zip}</p>
                    <p class="locator__hours">${HOURS}</p>
                    <a class="locator__phone" href="tel:+16823252124">(682) 325-2124</a>
                </div>
                <a class="locator__directions" href="${directionsUrl(store)}" target="_blank" rel="noopener noreferrer">Directions</a>
            `;
            item.addEventListener("click", (e) => {
                if (e.target.closest(".locator__directions, .locator__phone")) return;
                setActive(originalIndex, false);
            });
            listEl.appendChild(item);
        });
    }

    // Great-circle distance in miles.
    function haversineMiles(lat1, lon1, lat2, lon2) {
        const R = 3958.8, toRad = x => x * Math.PI / 180;
        const dLat = toRad(lat2 - lat1), dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
        return 2 * R * Math.asin(Math.sqrt(a));
    }

    function fitTo(stores) {
        if (!stores.length) return;
        map.fitBounds(L.latLngBounds(stores.map(s => [s.lat, s.lng])), { padding: [30, 30], maxZoom: 13 });
    }

    // Geocode a US ZIP (free OpenStreetMap Nominatim) and order stores by distance.
    function searchByZip(zip) {
        fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&countrycodes=us&postalcode=${encodeURIComponent(zip)}&limit=1`)
            .then(r => r.ok ? r.json() : [])
            .then(data => {
                if (!data || !data.length) { renderList(STORES); fitTo(STORES); return; }
                const olat = parseFloat(data[0].lat), olon = parseFloat(data[0].lon);
                const sorted = STORES.slice().sort((a, b) =>
                    haversineMiles(olat, olon, a.lat, a.lng) - haversineMiles(olat, olon, b.lat, b.lng)
                );
                renderList(sorted, [olat, olon]);
                // Frame the searched ZIP plus the nearest few stores.
                const pts = [[olat, olon]].concat(sorted.slice(0, 4).map(s => [s.lat, s.lng]));
                map.fitBounds(L.latLngBounds(pts), { padding: [40, 40], maxZoom: 12 });
            })
            .catch(() => { renderList(STORES); fitTo(STORES); }); // on any failure, show all
    }

    function setActive(index, fromMarker) {
        listEl.querySelectorAll(".locator__item").forEach(el => el.classList.remove("active"));
        const item = listEl.querySelector(`.locator__item[data-index="${index}"]`);
        if (item) {
            item.classList.add("active");
            if (!fromMarker) item.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        const store = STORES[index];
        map.flyTo([store.lat, store.lng], 13, { duration: 0.6 });
        markers[index].openPopup();
    }

    let geoTimer;
    searchEl.addEventListener("input", () => {
        const raw = searchEl.value.trim();
        clearTimeout(geoTimer);

        // A full 5-digit ZIP -> find the nearest stores (debounced so we geocode once).
        if (/^\d{5}$/.test(raw)) {
            geoTimer = setTimeout(() => searchByZip(raw), 400);
            return;
        }

        // Text search by name / address / city / state / partial zip.
        const q = raw.toLowerCase();
        const filtered = STORES.filter(s =>
            !q ||
            s.name.toLowerCase().includes(q) ||
            s.address.toLowerCase().includes(q) ||
            s.city.toLowerCase().includes(q) ||
            s.state.toLowerCase().includes(q) ||
            s.zip.includes(q)
        );
        // Never empty the list — if nothing matches, keep all locations on screen.
        const list = filtered.length ? filtered : STORES;
        renderList(list);
        fitTo(list);
    });

    renderList(STORES);
})();
