# 1\. Цель проекта

Цель проекта — разработать простое приложение для тайм-менеджмента и планирования (далее Приложение).
Приложение имеет отдельные (изолированные) блоки, адаптированно для мобильных телефонов и ПК.

# 2\. Описание системы

Основные функциональные блоки (далее Блоки):

1.  Время
2.  Секундомер
3.  Таймер по [методу "Помидора"](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D0%BF%D0%BE%D0%BC%D0%B8%D0%B4%D0%BE%D1%80%D0%B0)
4.  Управление задачами (To Do)
5.  Смена цветовой темы
6.  Смена языка интерфейса

## 2.1. Время (Clock)

Блок предусматривает показ времени выбранного города в аналоговом и цифровом виде. Под временем располагается выбор часового пояса. Данный блок является блоком по умолчанию для первого отображения. Так же по умолчанию предусмотрен один часовой пояс. При нажатии на кнопку добавить (+) всплывает модальное окно с выбором города в списке.

## 2.2. Секундомер (Stopwatch)

Блок показывает главный индикатор (ч:м:с:мс) с общим временем, дополнительный индикатор (ч:м:с:мс) с временем круга. Управление происходит тремя кнопками СТАРТ, КРУГ, СБРОС. При взаимодействии с кнопкой СТАРТ начинается отсчет времени, СТАРТ меняется на ПАУЗА (при нажатии останавливает общий отсчет времени). При нажатии на КРУГ дополнительный индикатор обнуляется, результат круга заносится в таблице снизу. При взаимодействии с кнопкой СБРОС стирается вся информация и обнуляются все индикаторы в данном функциональном блоке.

## 2.3. Таймер по методу "Помидора"

Блок предоставляет технологию управления временем (техника "Помидора"). 
Режимы работы: 1). Focus; 2). Short Break; 3). Long Break

Составные части: 
1. Таймер 25 минут
2. Текстовой заголовок (Focus | Short Break | Long Break)
3. Круговой индикатор (зависит от таймера)
4. Индикатор счета рабочего таймера
5. Кнопки: СТАРТ, ПАУЗА, ПРОПУСТИТЬ (после нажатия на старт)

Принцип работы. Устанавливается таймер 25 минут, после нажатия на СТАРТ происходит обратный отсчет, по истечении которого появляется уведомление и приложение переходит в режим Short Break, параллельно ведется счет количества пройденных режимов Focus. После того как в приложении прошло 4 режима Focus, устанавливается Long Short.

## 2.4. Управление задачами (To Do)
    
Простой блок To Do. Создание задач, редактирование, удаление, выполнение. 
Опционально: реализовать возможность изменение порядка перетаскиванием задач.

## 2.5. Смена цветовой темы

Изменение цветовой темы при нажатии в header кнопки.
Опционально: реализовать анимацию смены и переключения кнопки.

## 2.6. Смена языка интерфейса

Изменение языка всего приложения. При нажатии на флажок страны выпадает select с выбором языка.
English, Русский

# 3\. Предлагаемый стек технологий

Для реализации системы, предлагается следующий стек технологий:

  - React (React-router-dom)
  - SCSS (CSS modules)

Использование Context API + React hooks (useReducer) для global state.

Реализовать независимое сохранение каждого блока в global store, с дублированием данного store в local storage.

# 4\. Требования к дизайну

Минимализм. Наличие светлой и темной темы. Должен присутствовать логотип Системы где-то на странице.
Опционально: добавление анимации.

В нижней части страницы (в подвале) должно быть написано:

«Open Source» со ссылкой на GitHub проекта.