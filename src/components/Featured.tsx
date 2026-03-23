export default function Featured() {
  const items = [
    {
      tag: "Образование",
      title: "Ликбез",
      text: "«Безграмотный — тот же слепой» — под этим лозунгом в 1919 году вышел декрет об обязательном обучении грамоте. К концу 1920-х грамотность в стране выросла с 37% до 51%.",
    },
    {
      tag: "Искусство",
      title: "Пролеткульт",
      text: "Организация, стремившаяся создать новую пролетарскую культуру, порвав с «буржуазным» прошлым. В 1920 году объединяла более 400 тысяч участников по всей стране.",
    },
    {
      tag: "Архитектура",
      title: "Конструктивизм",
      text: "Новый советский стиль: строгие формы, стекло и бетон — на службе у нового общества. Рабочие клубы, дома-коммуны и фабрики-кухни стали воплощением революционного быта.",
    },
    {
      tag: "Кино",
      title: "Эйзенштейн и монтаж",
      text: "«Броненосец Потёмкин» (1925) потряс мир. Сергей Эйзенштейн разработал теорию монтажа — метода, который превратил советское кино в главное пропагандистское и художественное оружие эпохи.",
    },
  ];

  return (
    <div id="culture" className="bg-stone-50 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Основные направления</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-2xl leading-tight">
          Четыре силы, изменившие советскую культуру
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {items.map((item) => (
            <div key={item.tag} className="bg-stone-50 p-8 lg:p-12 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-red-700 font-semibold">{item.tag}</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
