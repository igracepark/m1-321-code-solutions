var tabContainer = document.querySelector('.tab-container');
var tabNodeList = document.querySelectorAll('.tab');
var viewNodeList = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  var matchesTab = event.target.matches('.tab');
  if (matchesTab === true) {
    for (var i = 0; i < tabNodeList.length; i++) {
      if (tabNodeList[i] === event.target) {
        event.target.className = 'tab active';
      } else {
        tabNodeList[i].className = 'tab';
      }
    }

    var dataView = event.target.getAttribute('data-view');
    for (var x = 0; x < viewNodeList.length; x++) {
      if (viewNodeList[x].getAttribute('data-view') === dataView) {
        viewNodeList[x].className = 'view';
      } else {
        viewNodeList[x].className = 'view hidden';
      }
    }
  }
});
