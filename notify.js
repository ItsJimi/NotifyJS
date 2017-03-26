var style = `
  background: #8e44ad;
  color: #efefef;
  border-radius: 4px;
  position: absolute;
  padding: 0px 10px;
  width: 200px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  top: 0px;
  right: 0px;
  margin: 10px;
  transform: translateX(250px);
  transition: transform 0.5s;
`;

var nbr = 0;

var showNotification = (text) => {
  var notification = document.createElement('div');
  notification.innerHTML = text;
  notification.style.cssText = style;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = `translateX(0px) translateY(${nbr * 60}px)`;
    nbr++;
  }, 500);
  setTimeout(() => {
    notification.style.transform = 'translateX(250px)';
  }, 5000);
  setTimeout(() => {
    notification.remove();
    nbr--;
  }, 5500);
};
