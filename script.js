// function toggleMode() {
//   const html = document.documentElement
//   html.classList.toggle("light")

//   // Get img
//   const img = document.querySelector("#profile img")

//   if (html.classList.contains("light")) {
//     img.setAttribute("src", "./assets/profile-light.png")
//     img.setAttribute("alt", "ginger cat screaming like 'the scream' painting")
//   } else {
//     img.setAttribute("src", "./assets/profile.png")
//     img.setAttribute(
//       "alt",
//       "ginger cat screaming like 'the scream' painting with sun glasses"
//     )
//   }
// }

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Get img
  const img = document.querySelector("#profile img")

  updateImage()
}

function updateImage() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile-light.png")
    img.setAttribute("alt", "Profile picture in light mode")
  } else {
    img.setAttribute("src", "./assets/profile.png")
    img.setAttribute("alt", "Profile picture")
  }
}

// Call updateImage on page load to set the correct image and alt text for the default mode
window.onload = updateImage

