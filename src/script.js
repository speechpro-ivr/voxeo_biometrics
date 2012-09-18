function searchAni(d, client_ani) {
  for (i = 0; i < d.client.length(); i++) {
    if (client_ani == d.client[i].ani) {
      return d.client[i].card-id.@data;
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