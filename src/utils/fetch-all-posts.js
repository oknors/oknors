import fs from "fs"
// import frontmatter from "front-matter"
import { onMount } from 'svelte';

// const postsPath = "./src/pages/post/"
// const hasExtention = /\.[^/.]+$/
//
const posts = fs
  async () => {
  const res = await fetch(`http://api.okno.rs:4433/okno/posts`);
  posts = await res.json();
}
//   .readdirSync(postsPath)
//   .filter(file => !hasExtention.test(file) && `${file}/index.svx`)
//   .map(fileName => {
//     const postContent = fs.readFileSync(`${postsPath}/${fileName}/index.svx`, {
//       encoding: "utf8",
//     })
//     const { attributes } = frontmatter(postContent)
//
//     return {
//       ...attributes,
//       slug: fileName.replace(hasExtention, ""),
//     }
//   })
//   .sort((a, b) => b.date.getTime() - a.date.getTime())
//
//


// let posts = [];
//
// onMount(async () => {
//   const res = await fetch(`http://api.okno.rs:4433/okno/posts`);
//   posts = await res.json();
// });



export default posts
