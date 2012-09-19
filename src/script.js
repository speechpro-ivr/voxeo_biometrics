function searchAni(d, client_ani) {
  for (i = 0; i < d.client.length(); i++) {
    if (client_ani == d.client[i].ani) {
      return d.client[i].child("card-id");
    }
  }
  return -1;
}

function getCardId(xml) {
  var status = xml.documentElement.getAttribute("Status");
  if (status == "OK") {
    return xml.documentElement.getAttribute("CardID");
  }
  return -1;
}

function getVerificationScore (xml) {
  var status = xml.documentElement.getAttribute("Status");
  if (status == "OK") {
    return xml.documentElement.getElementsByTagName("VoiceKeyScore").item(0).firstChild.data;
  }
  return -1;
}