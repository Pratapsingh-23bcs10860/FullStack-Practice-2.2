const products = [
  { name: "T-Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
  { name: "Smartphone", category: "Electronics" },
  { name: "Novel", category: "Books" },
  { name: "Cookbook", category: "Books" }
];

function filterProducts(categoryId, listId) {
  const category = document.getElementById(categoryId).value;
  const productList = document.getElementById(listId);
  productList.innerHTML = "";

  const filtered = category === "All" ? products : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product.name;
    productList.appendChild(li);
  });
}

// Load initial data for all three containers
filterProducts("category1", "productList1");
filterProducts("category2", "productList2");
filterProducts("category3", "productList3");
