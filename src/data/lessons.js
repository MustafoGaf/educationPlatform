const data = [
  {
    course_id: 1,
    name: "UX",
    lessons: [
      {
        id: 1,
        name: "Основы UX-дизайна",
        description:
          "Понимание пользовательского опыта, проектирование удобных интерфейсов.",
        has_video: true,
        has_content: true,
        prev: null,
        next: 2,
        content:
          "Этот урок охватывает основы UX-дизайна, включая понимание потребностей пользователей и принципы создания удобных интерфейсов.",
        src_video: "https://path/to/video1.mp4",
      },
      {
        id: 2,
        name: "Пользовательские исследования",
        description: "Сбор данных, проведение интервью, создание персон.",
        has_video: true,
        has_content: true,
        prev: 1,
        next: 3,
        content:
          "Здесь мы научим вас проводить качественные пользовательские исследования, включая создание пользовательских персон и анализ полученных данных.",
        src_video: "https://path/to/video2.mp4",
      },
      {
        id: 3,
        name: "Юзабилити-тестирование",
        description:
          "Методы проверки удобства интерфейсов: тесты, фокус-группы, A/B тесты.",
        has_video: true,
        has_content: true,
        prev: 2,
        next: 4,
        content:
          "Мы изучим методы юзабилити-тестирования, такие как A/B тестирование, фокус-группы и другие подходы для улучшения интерфейсов.",
        src_video: "https://path/to/video3.mp4",
      },
      {
        id: 4,
        name: "Прототипирование",
        description: "Создание макетов и интерактивных прототипов интерфейсов.",
        has_video: true,
        has_content: true,
        prev: 3,
        next: 5,
        content:
          "В этом уроке мы разберем, как создавать прототипы интерфейсов, используя различные инструменты и методы проектирования.",
        src_video: "https://path/to/video4.mp4",
      },
      {
        id: 5,
        name: "Инструменты",
        description: "Figma, Adobe XD, Sketch и другие программы для дизайна.",
        has_video: true,
        has_content: true,
        prev: 4,
        next: 6,
        content:
          "Мы познакомим вас с основными инструментами для UX-дизайна, такими как Figma и Adobe XD.",
        src_video: "https://path/to/video5.mp4",
      },
      {
        id: 6,
        name: "Принципы визуального дизайна",
        description: "Цвет, типографика, выравнивание, пропорции и контраст.",
        has_video: true,
        has_content: true,
        prev: 5,
        next: 7,
        content:
          "Здесь мы рассмотрим основные принципы визуального дизайна, такие как использование цвета, шрифтов и контраста.",
        src_video: "https://path/to/video6.mp4",
      },
      {
        id: 7,
        name: "Доступность (Accessibility)",
        description:
          "Проектирование интерфейсов для людей с ограниченными возможностями.",
        has_video: true,
        has_content: true,
        prev: 6,
        next: 8,
        content:
          "Мы научим вас проектировать интерфейсы, доступные для людей с ограниченными возможностями.",
        src_video: "https://path/to/video7.mp4",
      },
      {
        id: 8,
        name: "Когнитивные принципы",
        description:
          "Законы Гештальта, уменьшение когнитивной нагрузки, оптимизация процессов.",
        has_video: true,
        has_content: true,
        prev: 7,
        next: null,
        content:
          "В этом уроке мы рассмотрим когнитивные принципы и их влияние на создание удобных интерфейсов.",
        src_video: "https://path/to/video8.mp4",
      },
    ],
  },
  {
    course_id: 2,
    name: "UI",
    lessons: [
      {
        id: 1,
        name: "Основы UI-дизайна",
        description:
          "Создание визуально привлекательных и удобных интерфейсов.",
        has_video: true,
        has_content: true,
        prev: null,
        next: 2,
        content:
          "В этом уроке мы изучим основные принципы UI-дизайна, включая эстетику и функциональность.",
        src_video: "https://path/to/video9.mp4",
      },
      {
        id: 2,
        name: "Цветовая палитра",
        description: "Подбор гармоничных цветов и их использование в дизайне.",
        has_video: true,
        has_content: true,
        prev: 1,
        next: 3,
        content:
          "Этот урок научит вас подбирать и использовать гармоничные цвета в дизайне интерфейсов.",
        src_video: "https://path/to/video10.mp4",
      },
      {
        id: 3,
        name: "Типографика",
        description:
          "Работа со шрифтами, размером текста и межстрочным интервалом.",
        has_video: true,
        has_content: true,
        prev: 2,
        next: 4,
        content:
          "В уроке будет рассмотрено, как использовать шрифты и текстовые стили для создания читаемых интерфейсов.",
        src_video: "https://path/to/video11.mp4",
      },
      {
        id: 4,
        name: "Иконки и графические элементы",
        description: "Использование иконок для улучшения интерфейса и UX.",
        has_video: true,
        has_content: true,
        prev: 3,
        next: 5,
        content:
          "Мы разберем использование иконок и графических элементов для улучшения UX-дизайна.",
        src_video: "https://path/to/video12.mp4",
      },
      {
        id: 5,
        name: "Принципы визуального дизайна",
        description:
          "Выравнивание, контраст, баланс, пространство и пропорции.",
        has_video: true,
        has_content: true,
        prev: 4,
        next: 6,
        content:
          "Основные принципы визуального дизайна, такие как выравнивание и контраст, помогут вам создать эффективный интерфейс.",
        src_video: "https://path/to/video13.mp4",
      },
      {
        id: 6,
        name: "Компоненты интерфейса",
        description:
          "Кнопки, формы, модальные окна, вкладки и другие элементы.",
        has_video: true,
        has_content: true,
        prev: 5,
        next: 7,
        content:
          "В этом уроке мы изучим компоненты интерфейса, такие как кнопки, формы и вкладки.",
        src_video: "https://path/to/video14.mp4",
      },
      {
        id: 7,
        name: "Дизайн-системы",
        description:
          "Создание и использование универсальных компонентов в рамках проекта.",
        has_video: true,
        has_content: true,
        prev: 6,
        next: 8,
        content:
          "Мы рассмотрим, как создать и использовать дизайн-системы для унификации компонентов в интерфейсе.",
        src_video: "https://path/to/video15.mp4",
      },
      {
        id: 8,
        name: "Инструменты",
        description:
          "Figma, Adobe XD, Sketch и другие программы для создания UI.",
        has_video: true,
        has_content: true,
        prev: 7,
        next: 9,
        content:
          "Этот урок охватывает инструменты для UI-дизайна, включая Figma и Adobe XD.",
        src_video: "https://path/to/video16.mp4",
      },
      {
        id: 9,
        name: "Анимации",
        description:
          "Создание плавных переходов, анимации кнопок и других элементов.",
        has_video: true,
        has_content: true,
        prev: 8,
        next: 10,
        content:
          "Мы научим вас создавать анимации и плавные переходы в интерфейсах.",
        src_video: "https://path/to/video17.mp4",
      },
      {
        id: 10,
        name: "Адаптивный дизайн",
        description:
          "Оптимизация интерфейса для различных экранов и устройств.",
        has_video: true,
        has_content: true,
        prev: 9,
        next: null,
        content:
          "Этот урок посвящён адаптивному дизайну и оптимизации интерфейсов для различных устройств.",
        src_video: "https://path/to/video18.mp4",
      },
    ],
  },
  {
    course_id: 3,
    name: "Figma",
    lessons: [
      {
        id: 1,
        name: "Регистрация и интерфейс",
        description:
          "Изучение панели инструментов, настроек и рабочего пространства Figma.",
        has_video: true,
        has_content: true,
        prev: null,
        next: 2,
        content:
          "В этом уроке мы познакомимся с интерфейсом Figma и основными инструментами, которые помогут вам создавать интерфейсы.",
        src_video: "figma_intro.mp4",
      },
      {
        id: 2,
        name: "Рамки (Frames)",
        description:
          "Создание макетов для различных экранов: desktop, mobile, tablet.",
        has_video: true,
        has_content: true,
        prev: 1,
        next: 3,
        content:
          "Мы научимся использовать рамки для создания макетов под разные разрешения экранов и устройства.",
        src_video: "figma_frames.mp4",
      },
      {
        id: 3,
        name: "Фигуры и инструменты рисования",
        description:
          "Работа с прямоугольниками, эллипсами, линиями и произвольными фигурами.",
        has_video: true,
        has_content: true,
        prev: 2,
        next: 4,
        content:
          "В этом уроке вы узнаете, как рисовать различные геометрические фигуры и элементы для вашего проекта.",
        src_video: "figma_shapes.mp4",
      },
      {
        id: 4,
        name: "Работа с текстом",
        description:
          "Добавление текста, настройка шрифтов, работа с текстовыми стилями.",
        has_video: true,
        has_content: true,
        prev: 3,
        next: 5,
        content:
          "Этот урок охватывает работу с текстом, включая настройку шрифтов и создание текстовых стилей.",
        src_video: "figma_text.mp4",
      },
      {
        id: 5,
        name: "Слои",
        description: "Управление слоями, группировка и организация элементов.",
        has_video: true,
        has_content: true,
        prev: 4,
        next: 6,
        content:
          "Здесь мы рассмотрим, как эффективно работать со слоями и группировать элементы для удобства редактирования.",
        src_video: "figma_layers.mp4",
      },
      {
        id: 6,
        name: "Компоненты",
        description:
          "Создание повторно используемых элементов, таких как кнопки и карточки.",
        has_video: true,
        has_content: true,
        prev: 5,
        next: 7,
        content:
          "Мы научимся создавать компоненты, которые можно использовать повторно в проекте.",
        src_video: "figma_components.mp4",
      },
      {
        id: 7,
        name: "Варианты компонентов",
        description:
          "Работа с состояниями элементов (активный, неактивный, наведённый).",
        has_video: true,
        has_content: true,
        prev: 6,
        next: null,
        content:
          "Этот урок посвящен созданию вариантов компонентов, таких как активные и неактивные состояния.",
        src_video: "figma_variants.mp4",
      },
    ],
  },
  {
    course_id: 4,
    name: "Photoshop",
    lessons: [
      {
        id: 1,
        name: "Основы интерфейса Photoshop",
        description:
          "Изучение панелей, инструментов, настроек и основ рабочего пространства.",
        has_video: true,
        has_content: true,
        prev: null,
        next: 2,
        content:
          "Познакомимся с интерфейсом Photoshop и основными панелями, которые помогут вам работать с изображениями.",
        src_video: "photoshop_intro.mp4",
      },
      {
        id: 2,
        name: "Работа с изображениями",
        description:
          "Открытие, редактирование и сохранение изображений, работа с слоями.",
        has_video: true,
        has_content: true,
        prev: 1,
        next: 3,
        content:
          "В этом уроке мы научимся открывать изображения, редактировать их и работать со слоями.",
        src_video: "photoshop_images.mp4",
      },
      {
        id: 3,
        name: "Инструменты для ретуши",
        description:
          "Использование инструментов для улучшения качества изображения (штамп, восстанавливающая кисть, фильтры).",
        has_video: true,
        has_content: true,
        prev: 2,
        next: 4,
        content:
          "Вы научитесь ретушировать изображения с помощью инструментов, таких как штамп и восстанавливающая кисть.",
        src_video: "photoshop_retuch.mp4",
      },
      {
        id: 4,
        name: "Слои и маски",
        description:
          "Работа с слоями, наложение эффектов, создание и использование масок для точной коррекции.",
        has_video: true,
        has_content: true,
        prev: 3,
        next: 5,
        content:
          "В этом уроке мы изучим, как работать с слоями и масками для улучшения точности редактирования.",
        src_video: "photoshop_layers.mp4",
      },
      {
        id: 5,
        name: "Цветовая коррекция и фильтры",
        description:
          "Коррекция цвета, настройка яркости/контраста, применение фильтров для улучшения изображения.",
        has_video: true,
        has_content: true,
        prev: 4,
        next: null,
        content:
          "В этом уроке мы научимся делать цветовую коррекцию и использовать фильтры для улучшения изображения.",
        src_video: "photoshop_color_correction.mp4",
      },
    ],
  },
  {
    course_id: 5,
    name: "HTML",
    lessons: [
      {
        id: 1,
        name: "Основы HTML",
        description:
          "Изучение структуры документа HTML, теги, атрибуты, и базовые элементы страницы.",
        has_video: true,
        has_content: true,
        prev: null,
        next: 2,
        content:
          "Этот урок посвящен основам HTML и созданию базовой структуры веб-страницы.",
        src_video: "html_basics.mp4",
      },
      {
        id: 2,
        name: "Теги HTML",
        description:
          "Знакомство с основными тегами: <div>, <p>, <a>, <img>, <header>, <footer>, <section> и другие.",
        has_video: true,
        has_content: true,
        prev: 1,
        next: 3,
        content:
          "В этом уроке мы познакомимся с основными тегами HTML, которые используются для создания контента на веб-странице.",
        src_video: "html_tags.mp4",
      },
      {
        id: 3,
        name: "Семантические теги",
        description:
          "Использование семантических тегов для улучшения SEO и доступности: <article>, <nav>, <main>, <aside>.",
        has_video: true,
        has_content: true,
        prev: 2,
        next: 4,
        content:
          "В этом уроке вы узнаете, как использовать семантические теги для улучшения SEO и доступности веб-страницы.",
        src_video: "html_semantic_tags.mp4",
      },
      {
        id: 4,
        name: "Формы и элементы управления",
        description:
          "Создание форм с использованием тегов <form>, <input>, <button>, <select> и других элементов для сбора данных.",
        has_video: true,
        has_content: true,
        prev: 3,
        next: 5,
        content:
          "Мы научимся создавать формы для сбора данных с помощью HTML-элементов формы.",
        src_video: "html_forms.mp4",
      },
      {
        id: 5,
        name: "Встраивание медиа",
        description:
          "Вставка изображений, видео и аудио с помощью тегов <img>, <audio>, <video> и их атрибутов.",
        has_video: true,
        has_content: true,
        prev: 4,
        next: null,
        content:
          "В этом уроке мы изучим, как вставлять медиа-контент, включая изображения, видео и аудио.",
        src_video: "html_media.mp4",
      },
    ],
  },
  {
    course_id: 6,
    name: "CSS",
    lessons: [
      {
        id: 1,
        name: "Основы CSS",
        description: "Изучение синтаксиса CSS, селекторов, свойств и значений.",
        has_video: true,
        has_content: true,
        prev: null,
        next: 2,
        content:
          "В этом уроке мы познакомимся с основами CSS и как стилизовать элементы на веб-странице.",
        src_video: "css_basics.mp4",
      },
      {
        id: 2,
        name: "Блочная модель",
        description:
          "Понимание структуры элементов: margin, padding, border, content.",
        has_video: true,
        has_content: true,
        prev: 1,
        next: 3,
        content:
          "Мы разберемся с блочной моделью, которая является основой для позиционирования и отступов элементов.",
        src_video: "css_box_model.mp4",
      },
      {
        id: 3,
        name: "Селекторы",
        description:
          "Работа с различными типами селекторов: элементные, классовые, идентификаторы, псевдоклассы, псевдоэлементы.",
        has_video: true,
        has_content: true,
        prev: 2,
        next: 4,
        content:
          "В этом уроке мы изучим различные типы селекторов для точного выбора элементов на странице.",
        src_video: "css_selectors.mp4",
      },
      {
        id: 4,
        name: "Позиционирование элементов",
        description:
          "Использование свойств position (static, relative, absolute, fixed, sticky), управление слоями через z-index.",
        has_video: true,
        has_content: true,
        prev: 3,
        next: 5,
        content:
          "Этот урок посвящен позиционированию элементов на странице и управлению их слоями.",
        src_video: "css_positioning.mp4",
      },
      {
        id: 5,
        name: "Flexbox",
        description:
          "Гибкое позиционирование элементов с помощью свойства display: flex, выравнивание, распределение пространства.",
        has_video: true,
        has_content: true,
        prev: 4,
        next: 6,
        content:
          "Мы научимся использовать Flexbox для гибкого размещения элементов в контейнере.",
        src_video: "css_flexbox.mp4",
      },
      {
        id: 6,
        name: "Grid Layout",
        description:
          "Создание макетов с использованием CSS Grid: настройка колонок, строк и ячеек.",
        has_video: true,
        has_content: true,
        prev: 5,
        next: 7,
        content:
          "В этом уроке мы изучим CSS Grid для создания сложных и гибких макетов.",
        src_video: "css_grid.mp4",
      },
      {
        id: 7,
        name: "Анимации и переходы",
        description:
          "Использование CSS для создания плавных анимаций и переходов (transition, animation).",
        has_video: true,
        has_content: true,
        prev: 6,
        next: 8,
        content:
          "Мы создадим анимации и переходы с помощью CSS, чтобы улучшить интерактивность веб-страницы.",
        src_video: "css_animations.mp4",
      },
      {
        id: 8,
        name: "Медиазапросы",
        description:
          "Использование @media для создания адаптивных макетов, изменяющихся в зависимости от устройства.",
        has_video: true,
        has_content: true,
        prev: 7,
        next: 9,
        content:
          "В этом уроке мы изучим медиазапросы для создания адаптивных веб-страниц.",
        src_video: "css_media_queries.mp4",
      },
      {
        id: 9,
        name: "Стилизация форм",
        description:
          "Работа с элементами формы: input, button, select, создание кастомных стилей.",
        has_video: true,
        has_content: true,
        prev: 8,
        next: 10,
        content: "Мы научимся стилизовать формы и их элементы с помощью CSS.",
        src_video: "css_forms.mp4",
      },
      {
        id: 10,
        name: "Препроцессоры CSS (SASS, LESS)",
        description:
          "Изучение препроцессоров для улучшения структуры и эффективности CSS-кода.",
        has_video: true,
        has_content: true,
        prev: 9,
        next: null,
        content:
          "В этом уроке мы познакомимся с препроцессорами CSS, такими как SASS и LESS.",
        src_video: "css_preprocessors.mp4",
      },
    ],
  },
  {
    course_id: 7,
    name: "JavaScript",
    lessons: [
      {
        id: 1,
        name: "Основы JavaScript",
        description:
          "Изучение синтаксиса JavaScript, переменные, операторы, функции.",
        has_video: true,
        has_content: true,
        prev: null,
        next: 2,
        content:
          "Этот урок познакомит вас с основами JavaScript, включая синтаксис, переменные и функции.",
        src_video: "js_basics.mp4",
      },
      {
        id: 2,
        name: "Типы данных",
        description:
          "Основные типы данных: строка, число, булевый тип, массивы, объекты.",
        has_video: true,
        has_content: true,
        prev: 1,
        next: 3,
        content:
          "В этом уроке мы изучим основные типы данных, которые используются в JavaScript.",
        src_video: "js_data_types.mp4",
      },
      {
        id: 3,
        name: "Условия и циклы",
        description:
          "Работа с условиями (if, else, switch) и циклами (for, while, do-while).",
        has_video: true,
        has_content: true,
        prev: 2,
        next: 4,
        content:
          "Мы научимся использовать условия и циклы для управления логикой программы.",
        src_video: "js_conditions_loops.mp4",
      },
      {
        id: 4,
        name: "Функции",
        description:
          "Определение функций, передача параметров, возвращаемые значения, функции высшего порядка.",
        has_video: true,
        has_content: true,
        prev: 3,
        next: 5,
        content:
          "В этом уроке мы разберем, как создавать и использовать функции в JavaScript.",
        src_video: "js_functions.mp4",
      },
      {
        id: 5,
        name: "Объекты и массивы",
        description:
          "Создание и работа с объектами и массивами, методы и свойства.",
        has_video: true,
        has_content: true,
        prev: 4,
        next: 6,
        content:
          "Мы изучим объекты и массивы в JavaScript, а также способы их манипуляции.",
        src_video: "js_objects_arrays.mp4",
      },
      {
        id: 6,
        name: "Асинхронность",
        description:
          "Работа с асинхронными операциями: setTimeout, setInterval, промисы, async/await.",
        has_video: true,
        has_content: true,
        prev: 5,
        next: 7,
        content:
          "В этом уроке мы изучим асинхронные операции, такие как промисы и async/await.",
        src_video: "js_asynchronous.mp4",
      },
      {
        id: 7,
        name: "Манипуляции с DOM",
        description:
          "Работа с элементами страницы через DOM: выборка, изменение, создание элементов.",
        has_video: true,
        has_content: true,
        prev: 6,
        next: 8,
        content:
          "Этот урок научит вас манипулировать DOM-элементами с помощью JavaScript.",
        src_video: "js_dom_manipulation.mp4",
      },
      {
        id: 8,
        name: "События",
        description:
          "Обработка событий (click, submit, keypress), делегирование событий.",
        has_video: true,
        has_content: true,
        prev: 7,
        next: 9,
        content:
          "В этом уроке мы рассмотрим, как обрабатывать события на веб-странице.",
        src_video: "js_events.mp4",
      },
      {
        id: 9,
        name: "Модули",
        description:
          "Использование ES6 модулей (import, export) для организации кода.",
        has_video: true,
        has_content: true,
        prev: 8,
        next: 10,
        content:
          "Мы научимся организовывать код с помощью ES6 модулей, используя import и export.",
        src_video: "js_modules.mp4",
      },
    ],
  },
];
export default data;
