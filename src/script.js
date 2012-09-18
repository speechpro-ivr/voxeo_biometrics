function searchAni(jsonarray, ani) {
  var i = 0;
  for (i;  i < jsonarray.length; i++) {
    if (jsonarray[i].ani == ani) {
      return jsonarray[i].card_id;
    } 
  }
  return -1;
}

function getCardId (xml) {
  var status = xml.getElementsByTagName('Enroll').item(0).getAttribute('Status');
  if (status == 'OK') {
    return xml.getElementsByTagName('Enroll').item(0).getAttribute('CardID');
  }
  return -1;
}

function clientJson (client_ani,client_card_id) {
  return {client: {ani: client_ani, card_id: client_card_id}};
}

function getVerificationScore (xml) {
  var status = xml.getElementsByTagName('EnrollVerify').item(0).getAttribute('Status');
  if (status == 'OK') {
    var score = xml.getElementsByTagName('VoiceKeyScore').item(0).firstChild.data;
    return score;
  }
  return -1;
}