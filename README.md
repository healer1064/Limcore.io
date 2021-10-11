# FrontendWebTemplate

Проект Шаблон Frontend by Valentin Vorobyev

yarn => yarn start

В проекте настроен eslint, prettier и pre-commit hook, 
который запускается на этапе коммита (git commit) изменений и 
выполняет команды проверки eslint 
(в случае ошибок - error eslint не даст сделать коммит. 
А также запускается после проверки eslint команда fmt, 
которая форматирует весь код под всем файлам проекта 
под настроенные в проекте отступы, кавычки, переносы строк и тд и тп. 
(Также можно запустить каждую из команд из package.json отдельно):

```
yarn run eslint:fix
yarn run fmt
```

В проекте используется Redux-Toolkit и подключен Material UI для быстрого и удобного 
использования готовых компонент. 

В проекте реализован интересный Провайдер-оберта для вывода уведомлений:
'SnackbarProvider' - от либы 'notistack'

Пример вызова уведомления:

```
import { useSnackbar } from 'notistack'

const { enqueueSnackbar } = useSnackbar()

const handleClick = () => {
    enqueueSnackbar({ message, type }, {
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        autoHideDuration: 3000,
    }
})
```

Защищенные роуты:
...../sp-f-dealer/src/components/Router/protected-route.tsx

Пример:
```
<ProtectedRoute
       allowedUsersTypes={[USER_ROlES.businessMb, USER_ROlES.businessStv]}
       path='/arm-orders'
       exact
       component={ArmOrdersPage}
/>
```