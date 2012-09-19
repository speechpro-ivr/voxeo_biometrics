function searchAni(d, client_ani) {
  for (i = 0; i < d.client.length(); i++) {
    if (client_ani == d.client[i].ani) {
      return d.client[i].child("card-id");
    }
  }
  return -1;
}

function getCardId (d)
  {
    var status = d.@Status;
    if (status == 'OK') {
      return d.@CardID;
    }
    return -1;
  }

function clientXml (client_ani,client_card_id) {
  // var clientstr = '<client><ani>' + client_ani + '</ani><card-id>' + client_card_id +'</card-id></client>;'
  clientstr = 'client[ani]=' + client_ani + '&client[card_id]=' + client_card_id;
  return clientstr;
}

function getVerificationScore (d) {
  var status = d.@EnrollVerify;
  if (status == 'OK') {
    var score = d.VoiceKeyScore;
    return score;
  }
  return -1;
}
