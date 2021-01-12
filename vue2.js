// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      nextButton: 'Вперед',
      finished: false,
      steps: [
        {
          title: 'Основы',
          text:
            'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.',
        },
        {
          title: 'Компоненты',
          text:
            'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.',
        },
        {
          title: 'Роутер',
          text:
            'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.',
        },
        {
          title: 'Vuex',
          text:
            'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.',
        },
        {
          title: 'Composition',
          text:
            'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.',
        },
      ],
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      this.activeIndex > 0 ? this.activeIndex-- : this.activeIndex
      this.nextOrFinish()
    },
    next() {
      // когда нажимаем кнопку вперёд
      this.activeIndex < this.steps.length - 1
        ? this.activeIndex++
        : (this.finished = !this.finished)
      this.nextOrFinish()
    },
    reset() {
      // начать заново
      this.activeIndex = 0
      this.nextButton = 'Вперед'
      this.finished = false
    },
    nextOrFinish() {
      // кнопка вперед или закончить
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.activeIndex = idx
      this.nextOrFinish()
    },
    classObject(idx) {
      return {
        active: idx === this.activeIndex,
        done: idx <= this.activeIndex,
      }
    },
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
    isBackButton() {
      return !this.activeIndex
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    },
    changeButton() {
      if (this.activeIndex === this.steps.length - 1) {
        return (this.nextButton = 'Завершить')
      } else {
        return (this.nextButton = 'Вперед')
      }
    },
  },
}

Vue.createApp(App).mount('#app')
