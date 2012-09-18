function searchAni(jsonarray, ani) {
  for (var i=0;i<jsonarray.length;i++​) {
    if (jsonarray[i].ani == ani) {
      return jsonarray[i].card_id;
    } 
    else {
      return -1;
    }
  }
}

function getCardId (xml) {
  var status = xml.getElementsByTagName('Enroll').item(0).getAttribute('Status');
  if (status == 'OK') {
    return xml.getElementsByTagName('Enroll').item(0).getAttribute('CardID');
  else {
    return -1;
    }
  };
}

function clientJson (client_ani,client_card_id) {
  return {client: {ani: client_ani, card_id: client_card_id}};
}

function getVerificationScore (xml) {
  var status = xml.getElementsByTagName('EnrollVerify').item(0).getAttribute('Status')
  if (status == 'OK') {
    var score = xml.getElementsByTagName('VoiceKeyScore').item(0).firstChild.data;
    return score;
  else {
    return -1;
    }
  };
}