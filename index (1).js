$(function(){
  var $iframe = $('<iframe src="http://cdpn.io/pen/debug/QwyWXEd?authentication_hash=xnMabJnjYowr" ' +
    'frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="100%"></iframe>');

  $iframe.on("error", function(){
    $("body").append(
      '<center>' +
        '<marquee behavior="alternate" scrollamount="4">' +
          '<font face="Arial" size="6" color="#FF0000"><b>LOL BUNNY PARTY</b></font>' +
        '</marquee>' +
        '<marquee behavior="alternate" scrollamount="4" direction="right">' +
          '<font face="Arial" size="6" color="#00FF00"><b>LOL BUNNY PARTY</b></font>' +
        '</marquee>' +
      '</center>'
    );
  });

  $("body").append($iframe);

  $("body").append(
    '<noscript>' +
      '<center>' +
        '<marquee behavior="alternate" scrollamount="4">' +
          '<font face="Arial" size="6" color="#FF0000"><b>LOL BUNNY PARTY</b></font>' +
        '</marquee>' +
        '<marquee behavior="alternate" scrollamount="4" direction="right">' +
          '<font face="Arial" size="6" color="#00FF00"><b>LOL BUNNY PARTY</b></font>' +
        '</marquee>' +
      '</center>' +
    '</noscript>'
  );
});