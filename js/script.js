const metaEl =document.getElementById("page-meta");
const locationText=window.location.href;
const lastModified=new Date(document.lastModified).toLocaleString();
metaEl.textContent=`Location: ${locationText} | Last Modified: ${lastModified}`;


