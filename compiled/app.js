'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//APP COMPONENT
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      todos: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'clickHandler',
    value: function clickHandler(one) {
      //e.preventDefault();
      this.state.todos.push(one);
      console.log('TWO', this.state.todos);
      this.setState({
        todos: this.state.todos
      });
      console.log('CLICKED');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'To Do List'
        ),
        React.createElement(Add, { onClick: this.clickHandler.bind(this) }),
        React.createElement(List, { todos: this.state.todos })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidG9kb3MiLCJvbmUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2xpY2tIYW5kbGVyIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFDTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDBHQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFGZ0I7QUFLakI7Ozs7aUNBQ1lDLEcsRUFBSTtBQUNmO0FBQ0EsV0FBS0YsS0FBTCxDQUFXQyxLQUFYLENBQWlCRSxJQUFqQixDQUFzQkQsR0FBdEI7QUFDQUUsY0FBUUMsR0FBUixDQUFZLEtBQVosRUFBbUIsS0FBS0wsS0FBTCxDQUFXQyxLQUE5QjtBQUNBLFdBQUtLLFFBQUwsQ0FBYztBQUNaTCxlQUFPLEtBQUtELEtBQUwsQ0FBV0M7QUFETixPQUFkO0FBR0FHLGNBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0Q7Ozs2QkFFTztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUUsNEJBQUMsR0FBRCxJQUFLLFNBQVMsS0FBS0UsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBZCxHQUZGO0FBR0UsNEJBQUMsSUFBRCxJQUFNLE9BQU8sS0FBS1IsS0FBTCxDQUFXQyxLQUF4QjtBQUhGLE9BREY7QUFPRDs7OztFQXpCZVEsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0FQUCBDT01QT05FTlRcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvZG9zOiBbXVxuICAgIH1cbiAgfVxuICBjbGlja0hhbmRsZXIob25lKXtcbiAgICAvL2UucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnN0YXRlLnRvZG9zLnB1c2gob25lKTtcbiAgICBjb25zb2xlLmxvZygnVFdPJywgdGhpcy5zdGF0ZS50b2Rvcyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2RvczogdGhpcy5zdGF0ZS50b2Rvc1xuICAgIH0pXG4gICAgY29uc29sZS5sb2coJ0NMSUNLRUQnKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VG8gRG8gTGlzdDwvaDE+XG4gICAgICAgIDxBZGQgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICA8TGlzdCB0b2Rvcz17dGhpcy5zdGF0ZS50b2Rvc30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==