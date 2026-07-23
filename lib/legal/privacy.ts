import type { Locale } from "../i18n/config";

/**
 * Placeholders below are intentionally left in brackets — the user will
 * supply the operator's legal name/details, live domain, and contact email
 * later. Search for "[" to find every spot that still needs a real value.
 */

export type PrivacyBlock =
  | { type: "p"; text: string }
  | { type: "dash"; items: string[] }
  | { type: "def"; items: { term: string; text: string }[] };

export type PrivacySection = {
  title: string;
  blocks: PrivacyBlock[];
};

export type PrivacyContent = {
  eyebrow: string;
  title: string;
  sections: PrivacySection[];
};

const ru: PrivacyContent = {
  eyebrow: "Sublima · Юридическая информация",
  title: "Политика обработки персональных данных",
  sections: [
    {
      title: "1. Общие положения",
      blocks: [
        {
          type: "p",
          text: "Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые [наименование и реквизиты Оператора] (далее — Оператор).",
        },
        {
          type: "p",
          text: "1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.",
        },
        {
          type: "p",
          text: "1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта [адрес сайта Sublima].",
        },
      ],
    },
    {
      title: "2. Основные понятия, используемые в Политике",
      blocks: [
        {
          type: "def",
          items: [
            {
              term: "Автоматизированная обработка персональных данных",
              text: "обработка персональных данных с помощью средств вычислительной техники.",
            },
            {
              term: "Блокирование персональных данных",
              text: "временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).",
            },
            {
              term: "Веб-сайт",
              text: "совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу [адрес сайта Sublima].",
            },
            {
              term: "Информационная система персональных данных",
              text: "совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств.",
            },
            {
              term: "Обезличивание персональных данных",
              text: "действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.",
            },
            {
              term: "Обработка персональных данных",
              text: "любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.",
            },
            {
              term: "Оператор",
              text: "государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.",
            },
            {
              term: "Персональные данные",
              text: "любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта [адрес сайта Sublima].",
            },
            {
              term: "Персональные данные, разрешенные субъектом персональных данных для распространения",
              text: "персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее — персональные данные, разрешенные для распространения).",
            },
            {
              term: "Пользователь",
              text: "любой посетитель веб-сайта [адрес сайта Sublima].",
            },
            {
              term: "Предоставление персональных данных",
              text: "действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.",
            },
            {
              term: "Распространение персональных данных",
              text: "любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.",
            },
            {
              term: "Трансграничная передача персональных данных",
              text: "передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.",
            },
            {
              term: "Уничтожение персональных данных",
              text: "любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.",
            },
          ],
        },
      ],
    },
    {
      title: "3. Основные права и обязанности Оператора",
      blocks: [
        { type: "p", text: "3.1. Оператор имеет право:" },
        {
          type: "dash",
          items: [
            "получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные;",
            "в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;",
            "самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.",
          ],
        },
        { type: "p", text: "3.2. Оператор обязан:" },
        {
          type: "dash",
          items: [
            "предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;",
            "организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;",
            "отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;",
            "сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 30 дней с даты получения такого запроса;",
            "публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;",
            "принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;",
            "прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;",
            "исполнять иные обязанности, предусмотренные Законом о персональных данных.",
          ],
        },
      ],
    },
    {
      title: "4. Основные права и обязанности субъектов персональных данных",
      blocks: [
        { type: "p", text: "4.1. Субъекты персональных данных имеют право:" },
        {
          type: "dash",
          items: [
            "получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами;",
            "требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;",
            "выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг;",
            "на отзыв согласия на обработку персональных данных;",
            "обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора при обработке его персональных данных;",
            "на осуществление иных прав, предусмотренных законодательством РФ.",
          ],
        },
        { type: "p", text: "4.2. Субъекты персональных данных обязаны:" },
        {
          type: "dash",
          items: [
            "предоставлять Оператору достоверные данные о себе;",
            "сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.",
          ],
        },
        {
          type: "p",
          text: "4.3. Лица, передавшие Оператору недостоверные сведения о себе, либо сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с законодательством РФ.",
        },
      ],
    },
    {
      title: "5. Оператор может обрабатывать следующие персональные данные Пользователя",
      blocks: [
        { type: "p", text: "5.1. Фамилия и имя." },
        { type: "p", text: "5.2. Номер телефона." },
        { type: "p", text: "5.3. Адрес электронной почты." },
        {
          type: "p",
          text: "5.4. Адрес доставки заказа (город, улица, дом, квартира) — при оформлении доставки.",
        },
        { type: "p", text: "5.5. Комментарий и пожелания к заказу, если они указаны Пользователем." },
        {
          type: "p",
          text: "5.6. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика, Google Analytics и другие).",
        },
        {
          type: "p",
          text: "5.7. Данные для оплаты заказа (реквизиты карты и т.п.) Оператору не передаются и им не хранятся — их обработка осуществляется непосредственно платёжной системой-партнёром в соответствии с её собственной политикой конфиденциальности.",
        },
        {
          type: "p",
          text: "5.8. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.",
        },
        {
          type: "p",
          text: "5.9. Обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, интимной жизни, Оператором не осуществляется.",
        },
        {
          type: "p",
          text: "5.10. Обработка персональных данных, разрешенных для распространения, из числа специальных категорий персональных данных, указанных в ч. 1 ст. 10 Закона о персональных данных, допускается, если соблюдаются запреты и условия, предусмотренные ст. 10.1 Закона о персональных данных.",
        },
        {
          type: "p",
          text: "5.11. Согласие Пользователя на обработку персональных данных, разрешенных для распространения, оформляется отдельно от других согласий на обработку его персональных данных.",
        },
        {
          type: "p",
          text: "5.11.1. Согласие на обработку персональных данных, разрешенных для распространения, Пользователь предоставляет Оператору непосредственно.",
        },
        {
          type: "p",
          text: "5.11.2. Оператор обязан в срок не позднее трех рабочих дней с момента получения указанного согласия Пользователя опубликовать информацию об условиях обработки, о наличии запретов и условий на обработку неограниченным кругом лиц персональных данных, разрешенных для распространения.",
        },
        {
          type: "p",
          text: "5.11.3. Передача (распространение, предоставление, доступ) персональных данных, разрешенных субъектом персональных данных для распространения, должна быть прекращена в любое время по требованию субъекта персональных данных.",
        },
        {
          type: "p",
          text: "5.11.4. Согласие на обработку персональных данных, разрешенных для распространения, прекращает свое действие с момента поступления Оператору требования, указанного в п. 5.11.3 настоящей Политики.",
        },
      ],
    },
    {
      title: "6. Принципы обработки персональных данных",
      blocks: [
        { type: "p", text: "6.1. Обработка персональных данных осуществляется на законной и справедливой основе." },
        {
          type: "p",
          text: "6.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.",
        },
        {
          type: "p",
          text: "6.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.",
        },
        { type: "p", text: "6.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки." },
        {
          type: "p",
          text: "6.5. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается избыточность обрабатываемых персональных данных.",
        },
        {
          type: "p",
          text: "6.6. При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки.",
        },
        {
          type: "p",
          text: "6.7. Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных. Обрабатываемые персональные данные уничтожаются либо обезличиваются по достижении целей обработки.",
        },
      ],
    },
    {
      title: "7. Цели обработки персональных данных",
      blocks: [
        { type: "p", text: "7.1. Цель обработки персональных данных Пользователя:" },
        {
          type: "dash",
          items: [
            "оформление, обработка и доставка заказов, сделанных на сайте [адрес сайта Sublima];",
            "информирование Пользователя о статусе заказа посредством телефона, электронной почты или иных средств связи;",
            "заключение, исполнение и прекращение гражданско-правовых договоров;",
            "предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте [адрес сайта Sublima].",
          ],
        },
        {
          type: "p",
          text: "7.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты [контактный email Sublima] с пометкой «Отказ от уведомлений».",
        },
        {
          type: "p",
          text: "7.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.",
        },
      ],
    },
    {
      title: "8. Правовые основания обработки персональных данных",
      blocks: [
        { type: "p", text: "8.1. Правовыми основаниями обработки персональных данных Оператором являются:" },
        {
          type: "dash",
          items: [
            "договоры, заключаемые между оператором и субъектом персональных данных;",
            "федеральные законы, иные нормативно-правовые акты в сфере защиты персональных данных;",
            "согласия Пользователей на обработку их персональных данных.",
          ],
        },
        {
          type: "p",
          text: "8.2. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте или направленные Оператору посредством электронной почты.",
        },
        {
          type: "p",
          text: "8.3. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).",
        },
        {
          type: "p",
          text: "8.4. Субъект персональных данных самостоятельно принимает решение о предоставлении его персональных данных и дает согласие свободно, своей волей и в своем интересе.",
        },
      ],
    },
    {
      title: "9. Условия обработки персональных данных",
      blocks: [
        {
          type: "p",
          text: "9.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.",
        },
        {
          type: "p",
          text: "9.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом.",
        },
        {
          type: "p",
          text: "9.3. Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица.",
        },
        {
          type: "p",
          text: "9.4. Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных.",
        },
        {
          type: "p",
          text: "9.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.",
        },
        {
          type: "p",
          text: "9.6. Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее – общедоступные персональные данные).",
        },
        {
          type: "p",
          text: "9.7. Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.",
        },
      ],
    },
    {
      title: "10. Порядок сбора, хранения, передачи и других видов обработки персональных данных",
      blocks: [
        {
          type: "p",
          text: "Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.",
        },
        {
          type: "p",
          text: "10.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.",
        },
        {
          type: "p",
          text: "10.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору (в том числе службе доставки — для передачи заказа Пользователю).",
        },
        {
          type: "p",
          text: "10.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомления на адрес электронной почты [контактный email Sublima] с пометкой «Актуализация персональных данных».",
        },
        {
          type: "p",
          text: "10.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление по электронной почте [контактный email Sublima] с пометкой «Отзыв согласия на обработку персональных данных».",
        },
        {
          type: "p",
          text: "10.5. Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности.",
        },
        {
          type: "p",
          text: "10.6. Установленные субъектом персональных данных запреты на передачу персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах.",
        },
        { type: "p", text: "10.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных." },
        {
          type: "p",
          text: "10.8. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных.",
        },
        {
          type: "p",
          text: "10.9. Условием прекращения обработки персональных данных может являться достижение целей обработки, истечение срока действия согласия субъекта персональных данных или отзыв согласия субъектом персональных данных, а также выявление неправомерной обработки персональных данных.",
        },
      ],
    },
    {
      title: "11. Перечень действий, производимых Оператором с полученными персональными данными",
      blocks: [
        {
          type: "p",
          text: "11.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.",
        },
        {
          type: "p",
          text: "11.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.",
        },
      ],
    },
    {
      title: "12. Трансграничная передача персональных данных",
      blocks: [
        {
          type: "p",
          text: "12.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.",
        },
        {
          type: "p",
          text: "12.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.",
        },
      ],
    },
    {
      title: "13. Конфиденциальность персональных данных",
      blocks: [
        {
          type: "p",
          text: "Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.",
        },
      ],
    },
    {
      title: "14. Заключительные положения",
      blocks: [
        {
          type: "p",
          text: "14.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты [контактный email Sublima].",
        },
        {
          type: "p",
          text: "14.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.",
        },
        {
          type: "p",
          text: "14.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу [адрес сайта Sublima]/politika-konfidentsialnosti.",
        },
      ],
    },
  ],
};

const en: PrivacyContent = {
  eyebrow: "Sublima · Legal",
  title: "Personal Data Processing Policy",
  sections: [
    {
      title: "1. General Provisions",
      blocks: [
        {
          type: "p",
          text: "This personal data processing policy is drawn up in accordance with Federal Law No. 152-FZ of 27.07.2006 \"On Personal Data\" (the \"Personal Data Law\") and defines the procedure for processing personal data and the measures taken to ensure its security by [operator's legal name and details] (the \"Operator\").",
        },
        {
          type: "p",
          text: "1.1. The Operator's most important goal and condition for carrying out its activities is observing the rights and freedoms of individuals when processing their personal data, including protecting the right to privacy, personal and family secrets.",
        },
        {
          type: "p",
          text: "1.2. This policy on the processing of personal data (the \"Policy\") applies to all information the Operator may obtain about visitors of the website [Sublima website address].",
        },
      ],
    },
    {
      title: "2. Key Terms Used in the Policy",
      blocks: [
        {
          type: "def",
          items: [
            {
              term: "Automated processing of personal data",
              text: "processing of personal data by means of computing technology.",
            },
            {
              term: "Blocking of personal data",
              text: "temporary suspension of personal data processing (except where processing is necessary to clarify personal data).",
            },
            {
              term: "Website",
              text: "the collection of graphic and informational materials, as well as computer programs and databases, ensuring their availability on the internet at [Sublima website address].",
            },
            {
              term: "Personal data information system",
              text: "a set of personal data contained in databases, and the information technologies and technical means ensuring their processing.",
            },
            {
              term: "De-personalization of personal data",
              text: "actions that make it impossible to determine, without additional information, that personal data belongs to a specific User or other subject of personal data.",
            },
            {
              term: "Processing of personal data",
              text: "any action (operation) or set of actions (operations) performed, with or without the use of automation tools, on personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), de-personalization, blocking, deletion and destruction of personal data.",
            },
            {
              term: "Operator",
              text: "a state body, municipal body, legal entity or individual organizing and/or carrying out the processing of personal data, independently or jointly with others, and determining the purposes of processing, the composition of the personal data to be processed, and the actions (operations) performed with it.",
            },
            {
              term: "Personal data",
              text: "any information directly or indirectly related to an identified or identifiable User of the website [Sublima website address].",
            },
            {
              term: "Personal data permitted by the subject for distribution",
              text: "personal data to which an unlimited number of persons has been granted access by the subject of personal data, by giving consent to the processing of personal data permitted for distribution in the manner provided for by the Personal Data Law.",
            },
            {
              term: "User",
              text: "any visitor of the website [Sublima website address].",
            },
            {
              term: "Provision of personal data",
              text: "actions aimed at disclosing personal data to a specific person or a specific group of persons.",
            },
            {
              term: "Distribution of personal data",
              text: "any actions aimed at disclosing personal data to an indefinite group of persons (transfer of personal data), or at making personal data available to an unlimited group of persons, including publication of personal data in mass media, posting on information and telecommunication networks, or otherwise providing access to personal data.",
            },
            {
              term: "Cross-border transfer of personal data",
              text: "the transfer of personal data to the territory of a foreign state, to an authority of a foreign state, a foreign individual, or a foreign legal entity.",
            },
            {
              term: "Destruction of personal data",
              text: "any actions as a result of which personal data is irretrievably destroyed, with the impossibility of further restoring its content in the personal data information system and/or the destruction of physical media containing personal data.",
            },
          ],
        },
      ],
    },
    {
      title: "3. Basic Rights and Obligations of the Operator",
      blocks: [
        { type: "p", text: "3.1. The Operator has the right to:" },
        {
          type: "dash",
          items: [
            "receive reliable information and/or documents containing personal data from the subject of personal data;",
            "if the subject of personal data withdraws consent to the processing of personal data, continue processing without consent where grounds set out in the Personal Data Law exist;",
            "independently determine the composition and list of measures necessary and sufficient to ensure compliance with the obligations set out in the Personal Data Law and related regulations, unless otherwise provided by the Personal Data Law or other federal laws.",
          ],
        },
        { type: "p", text: "3.2. The Operator is obliged to:" },
        {
          type: "dash",
          items: [
            "provide the subject of personal data, at their request, information concerning the processing of their personal data;",
            "organize the processing of personal data in the manner established by applicable Russian law;",
            "respond to inquiries and requests from subjects of personal data and their legal representatives in accordance with the requirements of the Personal Data Law;",
            "report to the authorized body for the protection of the rights of personal data subjects, upon its request, the necessary information within 30 days of receiving such request;",
            "publish or otherwise ensure unrestricted access to this Policy on the processing of personal data;",
            "take legal, organizational and technical measures to protect personal data from unlawful or accidental access, destruction, modification, blocking, copying, provision, distribution of personal data, as well as from other unlawful actions in relation to personal data;",
            "stop the transfer (distribution, provision, access) of personal data, stop processing, and destroy personal data in the manner and in the cases provided for by the Personal Data Law;",
            "fulfil other obligations provided for by the Personal Data Law.",
          ],
        },
      ],
    },
    {
      title: "4. Basic Rights and Obligations of Personal Data Subjects",
      blocks: [
        { type: "p", text: "4.1. Subjects of personal data have the right to:" },
        {
          type: "dash",
          items: [
            "receive information concerning the processing of their personal data, except in cases provided for by federal laws;",
            "require the operator to clarify, block, or destroy their personal data if it is incomplete, outdated, inaccurate, unlawfully obtained, or not necessary for the stated purpose of processing, and to take measures provided by law to protect their rights;",
            "put forward a condition of prior consent when personal data is processed for the purposes of promoting goods, works and services on the market;",
            "withdraw consent to the processing of personal data;",
            "appeal to the authorized body for the protection of the rights of personal data subjects, or to a court, against unlawful actions or inaction of the Operator in the processing of their personal data;",
            "exercise other rights provided for by Russian law.",
          ],
        },
        { type: "p", text: "4.2. Subjects of personal data are obliged to:" },
        {
          type: "dash",
          items: [
            "provide the Operator with reliable information about themselves;",
            "notify the Operator of any clarification (update, change) of their personal data.",
          ],
        },
        {
          type: "p",
          text: "4.3. Persons who have provided the Operator with false information about themselves, or information about another subject of personal data without the latter's consent, bear liability in accordance with Russian law.",
        },
      ],
    },
    {
      title: "5. Personal Data the Operator May Process",
      blocks: [
        { type: "p", text: "5.1. Last name and first name." },
        { type: "p", text: "5.2. Phone number." },
        { type: "p", text: "5.3. Email address." },
        {
          type: "p",
          text: "5.4. Delivery address (city, street, house, apartment) — when arranging delivery.",
        },
        { type: "p", text: "5.5. Comments and wishes regarding the order, if specified by the User." },
        {
          type: "p",
          text: "5.6. The website also collects and processes de-personalized visitor data (including \"cookie\" files) using web analytics services (Yandex.Metrica, Google Analytics and others).",
        },
        {
          type: "p",
          text: "5.7. Payment details (card details, etc.) are not transferred to or stored by the Operator — they are processed directly by the partner payment system in accordance with its own privacy policy.",
        },
        {
          type: "p",
          text: "5.8. The data listed above are jointly referred to in this Policy as Personal Data.",
        },
        {
          type: "p",
          text: "5.9. The Operator does not process special categories of personal data relating to race, ethnicity, political views, religious or philosophical beliefs, or private life.",
        },
        {
          type: "p",
          text: "5.10. Processing of personal data permitted for distribution, among the special categories referred to in Part 1, Art. 10 of the Personal Data Law, is allowed provided the prohibitions and conditions set out in Art. 10.1 of the Personal Data Law are observed.",
        },
        {
          type: "p",
          text: "5.11. The User's consent to the processing of personal data permitted for distribution is issued separately from other consents to the processing of their personal data.",
        },
        {
          type: "p",
          text: "5.11.1. Consent to the processing of personal data permitted for distribution is provided by the User to the Operator directly.",
        },
        {
          type: "p",
          text: "5.11.2. The Operator is obliged, within no more than three business days from receiving such consent, to publish information on the terms of processing and on any prohibitions and conditions applicable to processing by an unlimited group of persons of personal data permitted for distribution.",
        },
        {
          type: "p",
          text: "5.11.3. The transfer (distribution, provision, access) of personal data permitted by the subject for distribution must be stopped at any time at the subject's request.",
        },
        {
          type: "p",
          text: "5.11.4. Consent to the processing of personal data permitted for distribution ceases to be effective from the moment the Operator receives the request referred to in clause 5.11.3 of this Policy.",
        },
      ],
    },
    {
      title: "6. Principles of Personal Data Processing",
      blocks: [
        { type: "p", text: "6.1. Personal data is processed on a lawful and fair basis." },
        {
          type: "p",
          text: "6.2. Personal data processing is limited to achieving specific, predetermined and legitimate purposes. Processing incompatible with the purposes of data collection is not permitted.",
        },
        {
          type: "p",
          text: "6.3. Combining databases containing personal data processed for incompatible purposes is not permitted.",
        },
        { type: "p", text: "6.4. Only personal data that meets the purposes of its processing is subject to processing." },
        {
          type: "p",
          text: "6.5. The content and scope of the personal data processed correspond to the stated purposes of processing. Excessive processing of personal data is not permitted.",
        },
        {
          type: "p",
          text: "6.6. When processing personal data, its accuracy and sufficiency are ensured, and where necessary its relevance to the purposes of processing.",
        },
        {
          type: "p",
          text: "6.7. Personal data is stored in a form that allows the subject of personal data to be identified for no longer than required by the purposes of processing. Processed personal data is destroyed or de-personalized once the purposes of processing have been achieved.",
        },
      ],
    },
    {
      title: "7. Purposes of Personal Data Processing",
      blocks: [
        { type: "p", text: "7.1. The purpose of processing the User's personal data:" },
        {
          type: "dash",
          items: [
            "placing, processing and delivering orders made on the website [Sublima website address];",
            "informing the User about the status of their order by phone, email or other means of communication;",
            "concluding, performing and terminating civil-law contracts;",
            "providing the User access to the services, information and/or materials contained on the website [Sublima website address].",
          ],
        },
        {
          type: "p",
          text: "7.2. The Operator also has the right to send the User notifications about new products and services, special offers and various events. The User may always opt out of receiving such messages by sending the Operator an email to [Sublima contact email] marked \"Unsubscribe from notifications\".",
        },
        {
          type: "p",
          text: "7.3. De-personalized User data collected through web analytics services serves to gather information about User actions on the website and to improve the quality of the website and its content.",
        },
      ],
    },
    {
      title: "8. Legal Grounds for Personal Data Processing",
      blocks: [
        { type: "p", text: "8.1. The legal grounds for the Operator's processing of personal data are:" },
        {
          type: "dash",
          items: [
            "contracts concluded between the operator and the subject of personal data;",
            "federal laws and other regulatory legal acts in the field of personal data protection;",
            "Users' consent to the processing of their personal data.",
          ],
        },
        {
          type: "p",
          text: "8.2. The Operator processes the User's personal data only when it has been entered and/or submitted by the User themselves through special forms on the website, or sent to the Operator by email.",
        },
        {
          type: "p",
          text: "8.3. The Operator processes de-personalized data about the User where this is permitted by the User's browser settings (storage of \"cookie\" files and the use of JavaScript technology are enabled).",
        },
        {
          type: "p",
          text: "8.4. The subject of personal data independently decides whether to provide their personal data and gives consent freely, of their own will and in their own interest.",
        },
      ],
    },
    {
      title: "9. Conditions for Personal Data Processing",
      blocks: [
        {
          type: "p",
          text: "9.1. Personal data is processed with the consent of the subject of personal data to the processing of their personal data.",
        },
        {
          type: "p",
          text: "9.2. Personal data processing is necessary to achieve the purposes provided for by an international treaty of the Russian Federation or by law.",
        },
        {
          type: "p",
          text: "9.3. Personal data processing is necessary for the administration of justice, the execution of a judicial act, or an act of another body or official.",
        },
        {
          type: "p",
          text: "9.4. Personal data processing is necessary for the performance of a contract to which the subject of personal data is a party, beneficiary, or guarantor.",
        },
        {
          type: "p",
          text: "9.5. Personal data processing is necessary to exercise the rights and legitimate interests of the operator or third parties, or to achieve socially significant purposes, provided the rights and freedoms of the subject of personal data are not violated.",
        },
        {
          type: "p",
          text: "9.6. Processing is carried out on personal data to which an unlimited group of persons has been granted access by the subject of personal data or at their request (publicly available personal data).",
        },
        {
          type: "p",
          text: "9.7. Processing is carried out on personal data subject to publication or mandatory disclosure in accordance with federal law.",
        },
      ],
    },
    {
      title: "10. Procedure for Collecting, Storing, Transferring and Otherwise Processing Personal Data",
      blocks: [
        {
          type: "p",
          text: "The security of personal data processed by the Operator is ensured through the implementation of legal, organizational and technical measures necessary to fully comply with the requirements of applicable law in the field of personal data protection.",
        },
        {
          type: "p",
          text: "10.1. The Operator ensures the safety of personal data and takes all possible measures to prevent access to it by unauthorized persons.",
        },
        {
          type: "p",
          text: "10.2. The User's personal data will never, under any circumstances, be transferred to third parties, except in cases related to compliance with applicable law, or where the subject of personal data has given the Operator consent to transfer data to a third party for the performance of obligations under a civil-law contract (including a delivery service — to hand over the order to the User).",
        },
        {
          type: "p",
          text: "10.3. If inaccuracies are found in personal data, the User may update it themselves by sending the Operator a notice at [Sublima contact email] marked \"Personal data update\".",
        },
        {
          type: "p",
          text: "10.4. The period of personal data processing is determined by achievement of the purposes for which the personal data was collected. The User may withdraw their consent to processing at any time by sending the Operator a notice by email at [Sublima contact email] marked \"Withdrawal of consent to personal data processing\".",
        },
        {
          type: "p",
          text: "10.5. All information collected by third-party services, including payment systems, communication tools and other service providers, is stored and processed by those parties (Operators) in accordance with their own User Agreement and Privacy Policy.",
        },
        {
          type: "p",
          text: "10.6. Prohibitions established by the subject of personal data on the transfer of personal data permitted for distribution do not apply where personal data is processed for state, public or other public interests.",
        },
        { type: "p", text: "10.7. The Operator ensures the confidentiality of personal data when processing it." },
        {
          type: "p",
          text: "10.8. The Operator stores personal data in a form that allows the subject to be identified for no longer than required by the purposes of processing.",
        },
        {
          type: "p",
          text: "10.9. Processing of personal data may be terminated upon achievement of the purposes of processing, expiry of the subject's consent, withdrawal of consent by the subject, or the discovery of unlawful processing.",
        },
      ],
    },
    {
      title: "11. Actions the Operator Performs with the Personal Data Received",
      blocks: [
        {
          type: "p",
          text: "11.1. The Operator carries out collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), de-personalization, blocking, deletion and destruction of personal data.",
        },
        {
          type: "p",
          text: "11.2. The Operator carries out automated processing of personal data, with or without receiving and/or transmitting the information obtained via information and telecommunication networks.",
        },
      ],
    },
    {
      title: "12. Cross-Border Transfer of Personal Data",
      blocks: [
        {
          type: "p",
          text: "12.1. Before commencing a cross-border transfer of personal data, the Operator must ensure that the foreign state to which the personal data is intended to be transferred provides reliable protection of the rights of personal data subjects.",
        },
        {
          type: "p",
          text: "12.2. Cross-border transfer of personal data to the territories of foreign states that do not meet the above requirements may only be carried out with the written consent of the subject of personal data to the cross-border transfer of their personal data, and/or for the performance of a contract to which the subject of personal data is a party.",
        },
      ],
    },
    {
      title: "13. Confidentiality of Personal Data",
      blocks: [
        {
          type: "p",
          text: "The Operator and other persons who have gained access to personal data are obliged not to disclose it to third parties and not to distribute it without the consent of the subject of personal data, unless otherwise provided by federal law.",
        },
      ],
    },
    {
      title: "14. Final Provisions",
      blocks: [
        {
          type: "p",
          text: "14.1. The User may obtain any clarification on questions concerning the processing of their personal data by contacting the Operator at [Sublima contact email].",
        },
        {
          type: "p",
          text: "14.2. Any changes to the Operator's personal data processing policy will be reflected in this document. The Policy is valid indefinitely until replaced by a new version.",
        },
        {
          type: "p",
          text: "14.3. The current version of the Policy is freely available on the internet at [Sublima website address]/politika-konfidentsialnosti.",
        },
      ],
    },
  ],
};

const content: Record<Locale, PrivacyContent> = { ru, en };

export function getPrivacyContent(locale: Locale): PrivacyContent {
  return content[locale];
}
