function getLangFromPath(pathname) {
    const parts = pathname.split("/").filter(Boolean);

    if (!parts.length) {
        return null;
    }

    const maybeLang = parts[0].toLowerCase();
    if (maybeLang === "th" || maybeLang === "en") {
        return maybeLang;
    }

    return null;
}

function buildPathWithLang(targetLang) {
    const { pathname, search, hash } = window.location;

    const parts = pathname.split("/").filter(Boolean);

    if (!parts.length) {
        return `/${targetLang}/Home/Index` + (search || "") + (hash || "");
    }

    const currentLang = getLangFromPath(pathname);

    if (currentLang) {
        parts[0] = targetLang;
    } else {
        parts.unshift(targetLang);
    }

    const newPath = "/" + parts.join("/");
    return newPath + (search || "") + (hash || "");
}

function switchLanguage(targetLang) {
    const newUrl = buildPathWithLang(targetLang);
    window.location.href = newUrl;
}

function updateLanguageButtonsActiveState() {
    const currentLang = getLangFromPath(window.location.pathname);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        const btnLang = btn.getAttribute("data-lang");
        if (btnLang === currentLang) {
            btn.classList.add("is-active");
        } else {
            btn.classList.remove("is-active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateLanguageButtonsActiveState();

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetLang = btn.getAttribute("data-lang");
            switchLanguage(targetLang);
        });
    });
});
