function searchAni(d, client_ani) {
    var clients = d.getElementsByTagName('client');
    var i = 0;
    for (i = 0; i < clients.length; i++) {
        var ani = clients[i].getElementsByTagName('ani').item(0).firstChild.data;
        if (ani == client_ani) {
            return clients[i].getElementsByTagName('card-id').item(0).firstChild.data;
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