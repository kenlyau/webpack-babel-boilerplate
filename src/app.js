export default {
  run(){
    let str = 'start app!';
    let h1 = document.createElement('h1');
    h1.className = 'text-center';
    h1.innerText = str;
    document.body.appendChild(h1);
    console.log('success!**');
    return true;
  }
}
