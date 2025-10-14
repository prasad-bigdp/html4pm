document.getElementById('btn').addEventListener('click', async function ()
{
    // let x = window.open("https://www.google.com")
    // setTimeout(()=>x.close(),5000)
    // window.history.back()
    // window.navigator.geolocation.getCurrentPosition((res) =>
    // {
    //     console.log(res.coords.latitude,res.coords.longitude)
    // })
    const res = await window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    document.getElementById('vd').srcObject = res;
    new MediaRecorder(res);
    // text to speech
    let msg = new SpeechSynthesisUtterance("hellooooooooooooooooooooooooooo")
    speechSynthesis.speak(msg)
})


