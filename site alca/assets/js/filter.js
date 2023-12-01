document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("category");
    const itemList = document.getElementById("item-list");

    categoryFilter.addEventListener("change", function () {
        const selectedCategory = categoryFilter.value;

        const items = itemList.getElementsByTagName("li");
        for (const item of items) {
            const itemCategory = item.getAttribute("data-category");

            if (selectedCategory === "all" || selectedCategory === itemCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
});