const data = {
    projects: [
        {
            id: 1,
            name: "Импульс",
            selected: "selected"
        },
        {
            id: 2,
            name: "Редактор КПМ"
        },
        {
            id: 3,
            name: "Itop"
        },
        {
            id: 4,
            name: "OpenProject"
        },
        {
            id: 5,
            name: "DocuWiki"
        }
    ],
    documents: [
        {
            id: 1,
            "name": "Согласование №233",
            "date": "12.09.2024",
            "author": "Яковлев А.В.",
            "state": "на согласовании",
            "priority": "высокий"
        },
        {
            id: 2,
            "name": "Макеты для ТЗ",
            "date": "13.05.2024",
            "author": "Иванов У.А.",
            "state": "отклонен",
            "priority": "средний"
        },
        {
            id: 3,
            "name": "Договор на оказание услуг #5765",
            "date": "14.05.2022",
            "author": "Петров У.А.",
            "state": "рассматривается",
            "priority": "высокий"
        }
    ],
    tasks: [
        {
            id: 1,
            "name": "Разработка макетов",
            "dates": "11.02.2024 - 16.03.2024",
            "executives": "Иванов А.В.",
            "priority": "средний",
        },
        {
            id: 2,
            "name": "Составление ТЗ",
            "dates": "01.12.2023 - 19.05.2024",
            "executives": "Петров И.Б, Анисимова А.Г.",
            "priority": "средний"
        },
        {
            id: 3,
            "name": "Верстка макетов",
            "dates": "12.05.2024 - 18.05.2024",
            "executives": "Сидянов У.А.",
            "priority": "высокий"
        },
        {
            id: 4,
            "name": "Программирование бэкенда",
            "dates": "12.02.2024 - 17.03.2024",
            "executives": "Иванов П.В.",
            "priority": "высокий"
        },
        {
            id: 5,
            "name": "Презентация проекта",
            "dates": "16.03.2024 - 17.03.2024",
            "executives": "Иванов П.В., Петров А.Б.",
            "priority": "критический"
        }
    ]
}

export default data;