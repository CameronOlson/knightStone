function openPc(evt, pcName) {
  var i, pcContent, pcLinks;
  pcContent = document.getElementsByClassName("pcContent");
  for (i = 0; i < pcContent.length; i++) {
    pcContent[i].style.display = "none";
  }
  pcLinks = document.getElementsByClassName("pcLinks");
  for (i = 0; i < pcLinks.length; i++) {
    pcLinks[i].className = pcLinks[i].className.replace(" active", "");
  }
  document.getElementById(pcName).style.display = "block";
  evt.currentTarget.className += " active";
}