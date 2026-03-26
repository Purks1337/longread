"use client"; // Обязательно для работы интерактивной карты (состояний hover)
import { useState } from "react";

export default function ChapterFive() {
  // Состояние для отслеживания того, на какую точку навели мышь
  const [hoveredSinger, setHoveredSinger] = useState<number | null>(null);

  return (
    <main className="pt-24 pb-32">
      {/* Заголовок и первый текст */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="font-headline font-black text-8xl md:text-[12rem] text-primary-container leading-none select-none">
            5
          </div>
          <div className="pt-4 md:pt-12">
            <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8 border-l-8 border-primary-container pl-6">
              Голоса, <br />
              <span className="text-primary-container">которые мы любим</span>
            </h1>
          </div>
        </div>

        <div className="max-w-4xl ml-auto md:mr-12 bg-surface-container p-8 md:p-12 brutalist-shadow">
          <p className="font-body text-xl md:text-2xl leading-relaxed text-on-background">
            <span className="font-bold font-headline uppercase text-primary-container mr-2">Оперные певцы</span> — 
            главные голоса театра, чьи таланты и мастерство оживляют великие произведения на сцене. Именно их голоса, актёрское искусство и сценическая харизма превращают музыку в живую драму, способную тронуть сердце каждого зрителя.
          </p>
          <div className="h-[1px] w-24 bg-primary-container my-8"></div>
          <p className="font-body text-lg text-on-surface-variant/80 leading-loose italic">
            В театре оперы и балета Урала собрана плеяда ярких солистов, каждый из которых вносит свой неповторимый вклад в успех постановок и славные традиции сцены.
          </p>
        </div>
      </section>

      {/* Видео №5 */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-surface-container-highest brutalist-shadow relative group cursor-pointer overflow-hidden aspect-video border-4 border-[#131313]">
          <div className="relative pt-[56.25%] w-full h-full">
            <iframe
              src="https://kinescope.io/embed/hCW6bWWrx6h17AMzMnmk1w"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              title="Видео №5"
            />
          </div>
          <div className="absolute top-6 left-6 bg-surface px-4 py-2 font-headline font-black text-primary-container text-2xl uppercase tracking-tighter border-l-4 border-primary-container">
            ВИДЕО №5
          </div>
        </div>
      </section>



      {/* Интервью: Мария Шляпникова */}
{/* Интервью: Мария Шляпникова */}
<section className="max-w-7xl mx-auto px-6 pt-32">
        <div className="mb-16">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 font-headline font-bold uppercase tracking-widest text-sm mb-4 inline-block">Герои сцены</span>
          <h2 className="font-headline text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Мария<br/>Шляпникова
          </h2>
          <p className="font-body text-xl md:text-2xl leading-relaxed text-on-surface/90 max-w-4xl border-l-4 border-primary-container pl-6 italic">
            В мире оперы есть голоса, которые невозможно забыть, — они проникают в самое сердце и остаются там навсегда. Сегодня у нас уникальная возможность познакомиться с одной из таких артисток — солисткой Урал Опера Балет, обладательницей редкого по красоте сопрано – Марией Шляпниковой. В нашем интервью мы поговорим о вдохновении, о сложностях, о буднях и о том, что значит быть частью легендарной труппы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Фотографии (Залипают при скролле) */}
          <div className="lg:col-span-4 xl:col-span-5 sticky top-24 space-y-8 hidden md:block">
            <div className="relative pt-8">
              <div className="polaroid-tape !-rotate-2 z-10"></div>
              <div className="bg-on-surface p-3 pb-12 shadow-2xl transform rotate-2">
                <img 
                  src="/materials/фоторепортаж/герои/Мария Шляпникова 2.JPG" 
                  alt="Мария Шляпникова" 
                  className="w-full aspect-[3/4] object-cover grayscale contrast-125"
                />
                
              </div>
            </div>
          </div>

          {/* Текст интервью */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-8 pb-20">
            {/* Вопрос-Ответ 1 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Подскажите, пожалуйста, что для вас важнее при подготовке к премьере: техническое выучивание нотного текста наизусть или проживание драматургии с первого дня?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic space-y-4">
                <span>— Хороший вопрос. Вначале, конечно, для меня важно выучить ноты, потому что без нотного материала никакой образ не построишь. Поэтому сначала мы готовим партию, это происходит, как минимум, два месяца. У нас проходят уроки с дирижёром, и он даёт какие-то свои коррективы. Потом у нас происходят уже сценические репетиции, и всё это время у тебя может уже зреть персонаж. К моменту режиссёрской репетиции уже итог получается.</span>
                <br/><br/>
                <span>Когда поёшь одну и ту же партию один, второй, третий раз, каждый выход он как новый. Персонаж с течением времени ещё нарастает. Он обретает новые краски и глубину.</span>
              </p>
            </div>

            {/* Вопрос-Ответ 2 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Опишите, пожалуйста, вашу систему отказа от выхода на сцену. При каких физических или психологических состояниях вы берёте больничный, а когда выходите любой ценой?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Конечно, всё зависит от состояния. Если у меня, например, сегодня спектакль вечером, а я проснулась и поняла, что с голосом что-то не так, я распеваюсь, «пробую» голос. Возможно, это какой-то небольшой фарингит, тогда можно работать. Если я осипла, я понимаю, что скорее всего к вечеру восстановиться не успею. Если тем более есть температура и ещё какие-то тяжёлые состояния, я понимаю, что у меня уже даже тело не в порядке – всё, к сожалению, сегодня не могу выйти. Тогда происходит замена.
              </p>
            </div>

            {/* Вопрос-Ответ 3 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Как вы считаете, оперный артист больше актер или же певец? 
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Важно понимать кто ты в первую очередь: оперный певец или всё-таки актёр тоже, потому что мы все вообще с разных сторон подходим к своей профессии. Я изначально была музыкантом, исполнителем на фортепиано. И, конечно, для меня в первую очередь идёт музыка. Потом очень важно быть именно актёром на сцене, тем более сейчас, когда у нас главенствует эпоха режиссёров, когда зритель приходит именно увидеть твою игру. Но, мне кажется, что именно в оперном театре самое главное - это пение, голос. Поэтому иногда у нас есть, например, такая традиция негласная, что если ты вводишься в спектакль, и первый раз выходишь петь, то для тебя главное именно спеть в данный момент. Потом, конечно, твой персонаж, как я уже сказала, обрастает, но в первую очередь главное, чтобы твой голос прозвучал. Это оперный театр, не музыкальный.
              </p>
            </div>

            {/* Вопрос-Ответ 4 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Расскажите о ваших молодёжных и благотворительных проектах?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Наша деятельность молодёжного совета началась с сентября 2025 года, и очень здорово, что Министерство культуры решило организовать такую группу по всей России. Нас объединяет название «Молодёжь в культуре», и нас около четырёх тысяч человек по всей России. Мы занимаемся работой с молодёжью, организуем проекты для привлечения людей на спектакли, чтобы молодые люди больше интересовались искусством и культурой. Одно из наших тоже больших направлений - это работа именно с нашими творческими ВУЗами и колледжами. Для нас важно влиять на кадровую сферу, в нашей сфере культуры, потому что она испытывает определённый кризис. В большинстве случаев мы, конечно, стараемся делать какие-то мероприятия именно для наших студентов-музыкантов.
              </p>
            </div>

            {/* Вопрос-Ответ 5 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Если сегодня приходит молодой зритель, который вырос в мире TikTok и коротких форматов. Как вы упаковываете для него оперу? Что вы делаете в своих проектах, чтобы трёхчасовой спектакль не пугал и интриговал?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — То, что мы занимаемся молодёжной политикой - это скорее про то, что мы занимаемся просветительской деятельностью. Можем рассказать об опере, рассказать о тех постановках, которые у нас идут, пригласить на какие-то эксклюзивные мероприятия. Мы адаптируемся в том плане, что мы открыты и разговариваем с молодыми людьми о нашей профессии на одном языке. А что касается адаптации именно оперы под современного зрителя, то этим занимаются, как мне кажется, больше режиссеры. Мы, как актёры тоже, конечно, стараемся, чтобы наш образ был яркий, но в первую очередь - это художники, режиссёры, которые ставят спектакли. Их задача - адаптировать спектакль на нового зрителя. Сейчас очень популярно мнение, что у зумеров проблема с концентрацией, всё время надо переключать внимание. Это заметно в современных постановках. Режиссёры стараются, чтобы картинка всё время менялась, всё бегало, и зритель не уставал, чтобы ему не становилось скучно.
              </p>
            </div>

            {/* Вопрос-Ответ 6 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Как вы бережёте свой голос? Что вы можете делать, а что категорически нельзя делать перед спектаклем?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Мой педагог - заслуженная артистка России Карлова Наталья меня воспитывала, что голос - это очень серьёзный инструмент, и к нему надо очень трепетно относиться. И самое главное - это сон, даже не режим питания. Нужно хорошо поесть перед спектаклем, чтобы был какой-то перерыв после еды обязательно. Но самое главное - это сон. Мы бережёмся, стараемся избегать каких-то больших скоплений людей, чтобы не заразиться какими-то респираторными заболеваниями. В целом поддерживаем себя в хорошей физической форме, то есть это минимально какой-то спорт, физическая активность, здоровый сон, положительные впечатления. Обязательно надо гулять. Конечно, я сейчас это всё описываю как идеальную картинку. Конечно, мы пренебрегаем всем этим, как и все люди.
              </p>
            </div>

            {/* Вопрос-Ответ 7 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Как вы выстраиваете отношения с партнёром по сцене? Особенно в любовных или конфликтных сценах, чтобы сохранить правдивость эмоций, но не нарушить личные границы?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Когда режиссёр сказал, что вы здесь дерётесь, мы и дерёмся. У нас нет такого, что если мы как-то себя повели в рамках отношений персонажа-персонажа, значит, у нас начинается какая-то личностная история за стенами театра, такого не бывает. У нас поставлена конкретная задача. Что касается актёрской игры, тоже есть какие-то определённые инструменты и технологии, как сделать драку, чтобы не было это физически как-то напряжно. Также в любовных сценах. У нас есть инструменты. Например, поцелуи, они не по-настоящему происходят на сцене. Есть несколько способов показать поцелуй так, чтобы зритель поверил. Когда мы поём, мы проживаем все эти эмоции, мы их демонстрируем, но как только ты вышел со сцены, ты сразу снова Мария, Александр, и у вас обычные человеческие взаимоотношения.
              </p>
            </div>

            {/* Вопрос-Ответ 8 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Представьте, что вы не на сцене, а в зрительном зале сидите рядом с человеком, который впервые в жизни пришёл в оперу. На что бы вы посоветовали обратить внимание?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — В первую очередь, я бы посоветовала читать содержание произведений. Очень часто бывает, что неподготовленный зритель приходит, разочаровывается, уходит и говорит, что он никогда больше не придёт в оперный театр. Конечно, для нас это очень горестно слышать. Поэтому вот, как раз существует наша молодёжная программа, и мы стараемся всё-таки рассказывать об опере на каком-то другом уже языке. Медиа отдел нашего театра, отдел продаж, отдел маркетинга, стараются привлекать молодёжь и делать рекламу на их языке.
              </p>
            </div>

            {/* Вопрос-Ответ 9 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Как вы справляетесь с волнением в момент выхода на сцену? Особенно после длительной паузы в действии.
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic space-y-4">
                <span>— С точки зрения вокала, первое - это я себя успокаиваю. Говорю: «Я занималась, я готовилась, а значит, какой-то результат в общем и целом я всё равно вынесу». А второе - это настройка на то, что ты сейчас выходишь и ты не думаешь, как ты споёшь, ты думаешь, что ты поёшь. Ты думаешь про свой образ, как его показать, какие у него грани.</span>
                <br/><br/>
                <span>У меня есть такой персонаж в опере Кармен. Я выхожу петь в первом действии, а потом второе действие не выхожу - перерыв. В этот момент я пью чай, расслабляюсь, и к третьему действию приходится себя заново готовить, заново собирать, заново распеваться. Разбудить тело важно. Вот так мы справляемся с этой проблемой.</span>
              </p>
            </div>

             {/* Вопрос-Ответ 10 */}
             <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Что для вас важнее в костюме? Визуальная красота, историческая достоверность или физический комфорт, позволяющий правильно дышать диафрагмой?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Для меня, как оперной певицы, конечно, главное - это третье. Главное, чтоб мне было комфортно. В принципе, костюмы чаще всего современные и, в принципе, удобные. Но бывает такое, что надо выходить в кринолине. Конечно, это всё давит, ты немножко капризничаешь, но стараешься приводить себя в профессиональную форму. Нас учили, что мы не должны вообще ни на что обращать внимания. Например, выходящее из плана или, например, если тебе что-то неудобно, ты всё равно должен петь.
              </p>
            </div>

             {/* Вопрос-Ответ 11 */}
             <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Какое место в театре за кулисами вы считаете самым атмосферным или любите больше всего?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Я даже вот как-то не задумывалась. То есть мне очень нравится вся служебная часть театра, и так вышло, что я выросла в театре с пяти лет, так как у меня мама тоже поёт. Для меня это как дом. Но каждый, наверное, уголок он ценен и исторически, и, как это сказать, по современному, по вайбу. Я бы назвала 309-й кабинет, там, где мы репетируем именно мизансценные репетиции, потому что там есть очень много реквизита и его просто интересно рассматривать. Бывает, приходишь перед репетицией и смотришь, там, например, жуки из «Дюймовочки» лежат.
              </p>
            </div>

             {/* Вопрос-Ответ 12 */}
             <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Буфет - является ли это местом обсуждения с коллегами прошедшего спектакля? Или же просто территория для отдыха и тишины?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Буфет - это скорее территория для обсуждений в течение дня. Конечно, там всегда очень оживлённо, заходишь, когда все солисты там, всё гремит и какие-то обсуждения очень активные, не только спектакля, но и текущей работы.
              </p>
            </div>

            {/* Вопрос-Ответ 13 */}
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-primary-container">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase text-primary-container mb-4">
                Скажите, пожалуйста, есть ли в оперном театре семьи?
              </h4>
              <p className="font-body text-lg leading-relaxed text-on-surface italic">
                — Ну вот то, что мы говорили про драки и любовные сцены, бывает так, что артисты, например, создают какие-то семейные пары. У нас, например, очень много семейных пар среди солистов, среди артистов хора. Получается, да, можно влюбиться на сцене.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}