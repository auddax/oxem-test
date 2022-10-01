import Calc from '../Calc/calc';
import './app.scss';

class App {
  root: HTMLElement;

  calc: Calc;

  constructor() {
    this.root = document.getElementById('root') as HTMLElement;
    this.calc = new Calc();
  }

  // listen(): void {
  //   this.root.addEventListener('click', (event) => {
  //     const target = event.target as HTMLElement;
  //     this.calc.listen(target);
  //   });
  // }

  render() {
    this.root.innerHTML = `
      <header class="page-header">
        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      </header>
      <main class="page-content">
      </main>
    `;
    this.calc.render();
  }
}

export default App;
