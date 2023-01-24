# Инструкция перед началом работы

Привет, Меня зовут Бакдөөлөт. Здесь вы можете посмотреть как начать работу, как запустить, как сделать форк проекта.
Итак давайте начнем!


## Форк

 1. Чтобы сделать форк проекта надо нажать на кнопку "Fork"
	![image](https://www.linkpicture.com/q/Screenshot_23.png) 
 
 2. Надо убрать галочку "Copy the main branch only" и нажать Create fork
 ![image2](https://www.linkpicture.com/q/Screenshot2_4.png)




## Клон проекта

 1. Нажать зеленую кнопку "Code"
 2. Скопировать https ссылку
 3. Окрыть консоль и перейти в директорию куда хотите склонировать этот проект
 4. Ввести команду (Вместо username ваш никнейм гитхаб) `git clone https://github.com/username/calculate_sum.git`
 5. Перейти в папку проекта `cd calculate_sum`
 6. Создать ветку с названием что вы будете делать, к примеру: настройка redux. `git checkout -b redux-configure`
 

## Запуск

 1. Сначала нужно установить зависимости для приложения. `npm install` или `yarn install` если вы используете yarn
 2. Проект инициализирован с помощью [Vite](https://vitejs.dev/)
 3. `yarn run dev` или `npm run dev` для запуска тестового режима
 4. `yarn run build` или `npm run build` для генерации продакшн версии ( не требуется запускать )

## Отправить изменения

 > #### Учимся писать информативные комментарии к GIT-коммитам используя общепринятую семантику. [Habr](https://habr.com/ru/company/otus/blog/537196/)
 1. `git add <changes>` вместо changes ваши изменения, к примеру: `git add redux/store.js` или просто `git add .`
 2. `git commit -m "commit text"` обязательно напишите что вы изменили внутри кавычек, коротко и ясно, к примеру: `git commit -m "add redux store, edit app.js, edit style.css"`
 3. `git push origin <ваша ветка>`
 4. Переходим ваш форкнутый репозиторий. Там должно появится зеленая кнопка "**Compare & pull request**" ![pull](https://www.testingdocs.com/wp-content/uploads/Compare-pull-request.png)
5. Переходите в такую страницу и нажимаете кнопку "**Create pull request**" и все![compare](https://www.earthdatascience.org/images/earth-analytics/git-version-control/github-create-pull-request.png)
