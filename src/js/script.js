document.addEventListener("DOMContentLoaded", () => {
    const tags = [
      { name: "js", url: "/tag/js/" },
      { name: "web", url: "/tag/web/" },
      // Добавьте другие теги
    ];
  
    const tagList = document.getElementById("tag-list");
    tags.forEach((tag) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = tag.url;
      a.textContent = tag.name;
      li.appendChild(a);
      tagList.appendChild(li);
    });
  });