import smoothscroll from 'smoothscroll-polyfill';

class Menu extends Component {
  constructor(props) {
    super(props);
    smoothscroll.polyfill();
    this.body = document.querySelector('body');
    this.menuActiveClass = 'nav-menu-open';
    this.menuAnimatelass = 'nav-menu-animate';
  }

  componentDidMount() {
    // 
  }

  removeActiveClass = () => {
    this.body.classList.remove(this.menuAnimatelass);
    setTimeout(() => {
      this.body.classList.remove(this.menuActiveClass);
    }, 100);
  };
  
  addActiveClass = () => {
    this.body.classList.add(this.menuActiveClass);
    setTimeout(() => {
      this.body.classList.add(this.menuAnimatelass);
    }, 100);
  };

  render() {
    //
    return (
      <></>
    );
  }
}

