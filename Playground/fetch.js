// write a function to retrieve a blob of json
// make an AJAX request using the 'fetch' function
// https://rallycoding.herokuapp.com/api/music_albums

//function fetchAlbums() {
//    fetch('https://rallycoding.herokuapp.com/api/music_albums')
//    .then(res => res.json())
//    .then(json => console.log(json));
//}
//**************Note above is 'old-style' to do what async await does below */

//fetchAlbums();

//async function fetchAlbums() {
//    const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');

//    const json = await response.json();
//
//    console.log(json);
//}

//******The above can also be done with arrow functions****/

const fetchAlbums = async () => {
    const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    
    const json = await response.json();
    console.log(json);

}

fetchAlbums();

