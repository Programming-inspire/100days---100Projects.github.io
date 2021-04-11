const calculate = () =>{
    let input = document.getElementById('input').value;

    let remText = input.replace(/\s/g, "")
    let noc = remText.length;
    let output1 = document.getElementById('output1').innerHTML="Total Characters = " + noc;


    let count = input.match(/\w+/g);
    let res = count.length;
    let output2 = document.getElementById('output2').innerHTML="Total Words =" + res;
}
