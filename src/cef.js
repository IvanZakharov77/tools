var uCef;


if(import.meta.env.MODE === 'production') {
  uCef = {
    addEvent: function (eventName, eventCallback) {
      if (window.uCef) {
        window.uCef.addEvent(eventName, eventCallback);
      }
    },
    triggerEvent: function (eventName, ...args) {
      if (window.uCef) {
        window.uCef.triggerEvent(eventName, args);
      }
    },
  };
} else {
  let cefEvents = {};
  uCef = {
    callFunction: function(jsonInfo) {
      var jsonObj = JSON.parse(jsonInfo);
      var methodName = jsonObj["method"];
      var args = jsonObj["args"];
      if (methodName in cefEvents) {
        if (args) {
          cefEvents[methodName].forEach(eventCallback => eventCallback(...args));
        } else {
          cefEvents[methodName].forEach(eventCallback => eventCallback());
        }
      }
    },
    addEvent: function(eventName, eventCallback) {
      if (eventName in cefEvents) {
        cefEvents[eventName].push(eventCallback);
      }
      else {
        cefEvents[eventName] = [eventCallback];
      }
    },
    triggerEvent: function(eventName, args) {
      if (window.uCef) {
        window.uCef.triggerEvent(eventName, args);
      }
    }
  };
}
export default uCef;
