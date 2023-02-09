#Реализован слайдер для фото, исходя из требований ниже.

-----

###Общие требования:

- Должна быть возможность пролистывать фото. Например, добавить 2 кнопки вперед и назад (предыдущее, следующее и так далее);
- При клике «назад» на первом фото должно открываться последнее. При клике «вперед» на последнем фото должно открываться первое;
- Блок, в котором располагаются изображения, не должен меняться под размер картинок;
- Добавить анимацию при переключении фото;
- На входе — массив изображений. Их может быть любое количество;
- Использовать стороннее API, сделав GET запрос для получения изображений;
- Соблюдать семантическую верстку;
- Использовать селекторы по тегу для задания стилей нельзя. Использовать классы. В случае, когда есть необходимость — селектор по id;
- Дизайн произвольный. Минимум — застилизовать кнопки (добавить hover) и обеспечить для них accessibility: переключение по tab, enter и стрелками лево/право.