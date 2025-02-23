const shayariList = [
  "रंजिश ही सही दिल ही दुखाने के लिए आ, \nआ फिर से मुझे छोड़ के जाने के लिए आ। - अहमद फ़राज़",
  "सुना है लोग उसे आँख भर के देखते हैं, \nसो उसके शहर में कुछ दिन ठहर के देखते हैं। - अहमद फ़राज़",
  "तुम तकल्लुफ़ को भी इख़लास समझते हो फ़राज़, \nदोस्त होता नहीं हर हाथ मिलाने वाला। - अहमद फ़राज़",
  "अब के हम बिछड़े तो शायद कभी ख़्वाबों में मिलें, \nजिस तरह सूखे हुए फूल किताबों में मिलें। - अहमद फ़राज़",
  "दिल को मोहब्बत के सबक़ सिखा दिए, \nतेरा ही नाम लेकर तुझसे गिला किए। - अहमद फ़राज़",
  "तुम्हारे शहर का मौसम बड़ा सुहाना लगे, \nमैं एक शाम चुरा लूँ अगर बुरा ना लगे। - अहमद फ़राज़",
  "जो था ही नहीं मेरा वो मुझसे क्या छीनोगे, \nमेरा सब कुछ तो लुटा बैठा हूँ मैं। - अहमद फ़राज़",
];

function getShayari() {
  const randomIndex = Math.floor(Math.random() * shayariList.length);
  const shayariBox = document.getElementById("shayari");
  shayariBox.style.opacity = "0"; // Fade out effect

  setTimeout(() => {
    shayariBox.innerText = shayariList[randomIndex];
    shayariBox.style.opacity = "1"; // Fade in effect
  }, 400);
}

document.getElementById("shayariBtn").addEventListener("click", getShayari);
