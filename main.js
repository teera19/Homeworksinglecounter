// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

  const counter = document.querySelector(".counter");
  const buttonplus = document.querySelector(".btn-inc");
  const buttondelete = document.querySelector(".btn-dec");
  const buttonc = document.querySelector(".btn-clr");
  
  const isnumber = document.querySelector(".number");
  
  isnumber.setAttribute('id', 'num');
  buttonplus.setAttribute('onclick', 'buttonplusClick()');
  buttondelete.setAttribute('onclick', 'buttondeleteClick()');
  buttonc.setAttribute('onclick', 'buttoncClick()');


  let count = 0;
    function buttonplusClick(){
        count += 1;
        document.getElementById('num').innerHTML = count;
        // console.log(count);
    }
    function buttondeleteClick(){
        count -= 1;
        if(count <0 ){
            count = 0;
        }
        document.getElementById('num').innerHTML = count;
        // console.log(count);
    }
    function buttoncClick(){
        if(count > 0){
            count = 0;
        }
        document.getElementById('num').innerHTML = count;
        // console.log(count);
    }