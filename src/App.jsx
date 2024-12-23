import { useState } from 'react'
import { Flex, Layout } from 'antd';
import img from "./img/2.webp";
import img2 from "./img/poster_event_1936599.jpg";
import { Collapse } from 'antd';
import { Carousel } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import './App.css'

const items = [
  {
    key: '1',
    label: 'Повышение популярности блокчейн-технологий',
    children: <p>Блокчейн выступает
    фундаментом для разнообразия децентрализованных сервисов, предоставляя
    возможность пользователям безопасно хранить и обмениваться информацией
    без участия третьих сторон.</p>,
  },
  {
    key: '2',
    label: 'Прогресс в сфере NFT',
    children: <p>Невзаменимые цифровые активы (NFT)
    набирают обороты, благодаря своей способности представлять права на
    владение в цифровом пространстве, такие как произведения искусства,
    музыкальные композиции и элементы виртуальной реальности.</p>,
  },
  {
    key: '3',
    label: 'Повышение качества взаимодействия с пользователями благодаря ИИ',
    children: <p>Применение искусственного интеллекта и машинного обучения
    способствует созданию более интуитивно понятных и гибких
    пользовательских интерфейсов, которые могут более точно отвечать запросам
    и предпочтениям пользователей.</p>,
  },
];

function App() {


  return (
    <div className='content'>
      <div className="header">
        Основные направления развития современных Интернет-технологий
      </div>
      <div className="wrapper">
        <Flex vertical align='center' justify='center' style={{
          backgroundColor:'white',
          width:'70%',
          marginTop:'50px',
          marginBottom:'50px',
          borderRadius:'20px',
          padding:'50px',
          color: 'black',
          boxShadow: `0px 5px 10px 7px rgba(34, 60, 80, 0.2)`,
        }}>
          <div className='title'>
            ВВЕДЕНИЕ
          </div>
          <div className='text'>
            <div className='text_1'>
              <div style={{
                width:'70%'
              }}>В наше время информационно-коммуникационные технологии и
              интернет-технологии стали неотъемлемыми элементами, определяющими
              экономические, социальные и культурные тенденции. За последние годы
              стремительное развитие ИКТ послужило толчком к глубоким переменам во
              всех аспектах нашей жизни [1]. Введение инноваций, таких как облачные
              сервисы, искусственный интеллект, Интернет вещей и анализ больших
              данных, преобразило наши методы общения, работы и обмена информацией.
              </div>
            </div>
            <div className='text_2'>
              <div style={{
                width:'70%',
                textAlign:'end',
              }}>В рамках технологического дискурса, ИТ сегодня обеспечивают
              мгновенное распространение информации, доступ к ней в режиме онлайн и
              автоматизацию бизнес-процессов. Это дает компаниям возможность более
              грамотно распоряжаться ресурсами и быстро приспосабливаться к
              изменениям рыночных условий. С социальной точки зрения, ИТ способствуют
              возникновению новых форм общения и взаимодействия между людьми,
              создавая всемирную информационную сеть, где обмен идеями и знаниями
              становится намного проще и доступнее.
              </div>
            </div>
            <div className='text_1'>
              <div style={{
                width:'70%',
              }}>Ключевым направлением в сфере информационных технологий
              является идея "Цифровой экономики", которая заключается в трансформации
              ключевых процессов в разнообразных отраслях, включая банковское дело,
              медицину и промышленность. Этот процесс открывает двери для улучшения
              производительности и усиления конкурентных преимуществ, а также
              пересматривает устаревшие бизнес-практики. ИТ-индустрия стоит у истоков
              этих изменений, предоставляя инструменты для обработки данных и
              автоматизации бизнес-процессов.
              </div>
            </div>
            <div className='text_2'>
              <div style={{
                width:'70%',
                textAlign:'end',
              }}>Кроме того, нельзя не упомянуть о "Индустрии 4.0", которая
              символизирует переход к цифровым и автоматизированным методам
              производства. В этой концепции особое внимание уделено передовым
              технологиям, таким как киберфизические системы и Интернет вещей, которые
              способствуют созданию интеллектуальных производственных мощностей и
              увеличению уровня автоматизации.
              </div>
            </div>
            <div className='text_1'>
              <div style={{
                width:'70%',
              }}>И, наконец, не менее важно упомянуть о "Web 3.0", что является
              следующим этапом развития интернета, основанным на децентрализации,
              безопасности и индивидуализации. В рамках Web 3.0 усиливается интерес к
              технологиям блокчейн и искусственному интеллекту, которые дают
              пользователям больше контроля над своими данными и открывают новую эру
              взаимодействия в цифровом мире.
              </div>
            </div>
          </div>
        </Flex>
        <Flex vertical justify='center' align='center' style={{
          backgroundColor:'white',
          width:'100%',
          paddingTop:'50px',
          paddingBottom:'50px',
        }}>
          <div className='first'>
              1
          </div>
          <div className='title'>
            КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ РАЗВИТИЯ ИТ В КОНЦЕПЦИИ «WEB 3.0»
          </div>
          <div className='content_first'>
            <div className='content_first_text'>
              Web 3.0, часто называемый «семантическим вебом» или
              «децентрализованным интернетом», представляет собой третье поколение
              интернет-технологий, которое фокусируется на создании более умных,
              безопасных и персонализированных цифровых пространств [2]. В отличие от
              Web 1.0, который представлял собой статические страницы, и Web 2.0,
              который акцентировал внимание на взаимодействии и создании контента
              пользователями, Web 3.0 стремится использовать технологии для улучшения
              качества взаимодействия пользователей с контентом и друг с другом.
            </div>
            <div className='content_first_text'>
              Ключевыми особенностями Web 3.0 являются децентрализация,
              повышение уровня приватности и использование технологий искусственного
              интеллекта (ИИ) для улучшения пользовательского опыта. Вместо
              централизованных платформ, которые контролируют данные пользователей,
              Web 3.0 предполагает использование блокчейн-технологий и распределенных
              систем, что позволяет пользователям иметь больший контроль над своими
              данными и их использованием.
            </div>
            <div className='content_first_text'>
              На сегодняшний день концепция Web 3.0 находится на стадии активного
              развития и экспериментов. Разработчики и стартапы по всему миру работают
              над созданием децентрализованных приложений (dApps), которые используют
              блокчейн для хранения данных и выполнения операций. Это создает новые
              возможности для построения прозрачных и безопасных систем, что особенно
              актуально в условиях растущих угроз кибербезопасности и нарушения
              приватности данных
            </div>
            <div className='title'>
              Важными аспектами текущего состояния Web 3.0 являются:
            </div>
            <Collapse style={{
              marginTop:'50px',
              width:'60%',
              fontSize:'20px',
            }}  ghost items={items} />
            <div className='title'>
              К основным технологическим трендам, определяющим развитие Web
              3.0, можно отнести:
            </div>
            <div className='ul_li'>
              <ul>
                <li><b>Децентрализация</b>: Устранение централизованных посредников в
                процессе обработки и хранения данных.</li>
                <li><b>Блокчейн и криптовалюты</b>: Использование технологии блокчейн для
                безопасного хранения данных и управления цифровыми активами.</li>
                <li><b>Искусственный интеллект и машинное обучение</b>: Автоматизация
                обработки данных и создание адаптивных интерфейсов для улучшения
                пользовательского опыта.</li>
                <li><b>3D-визуализация и интерактивность</b>: Применение технологий 3Dграфики для создания более погружающего и интерактивного
                пользовательского опыта.</li>
                <li><b>Метавселенные</b>: Создание виртуальных пространств, в которых
                пользователи могут взаимодействовать друг с другом и с цифровыми
                объектами.</li>
              </ul>
            </div>
          </div>
        </Flex>
        <Flex vertical justify='center' align='center' style={{
          backgroundColor:'#ededf4',
          padding:'20px 0',
          width:'100%'
        }}>
            <div className='second'>
                2
            </div>
            <div className='title'>
              3D-ВИЗУАЛИЗАЦИЯ И ИНТЕРАКТИВНОСТЬ КАК ТРЕНД
              WEB 3.0
            </div>
            <div className='content_second'>
              3D-визуализация и интерактивность представляют собой одни из
              наиболее заметных и перспективных трендов в рамках концепции Web 3.0 [4].
              Эти технологии позволяют создавать более насыщенные, погружающие и
              адаптивные пользовательские интерфейсы, что в свою очередь открывает
              новые горизонты для взаимодействия пользователей с контентом и друг с
              другом. Рассмотрим более подробно, как именно 3D-визуализация и
              интерактивность влияют на цифровую среду.
            </div>
            <div className='title'>
              Преимущества 3D-визуализации:
            </div>
            <div className='slides'>
              <div className='slide'>
              <p><b>Увеличение уровня погружения</b>: 3D-визуализация позволяет
                создавать сложные виртуальные пространства, в которых пользователи могут
                перемещаться, взаимодействовать с объектами и другими пользователями.
                Например, в рамках метавселенных пользователи могут исследовать
                виртуальные миры, посещать мероприятия или участвовать в играх, что
                создает эффект полного погружения.</p>
              </div>
              <div className='slide'>
                <p><b>Интуитивный интерфейс</b>: 3D-интерфейсы предоставляют
                пользователям возможность взаимодействовать с объектами так же, как они
                это делают в реальном мире. Это снижает порог входа для новых
                пользователей и делает взаимодействие с цифровыми продуктами более
                интуитивным. Например, перетаскивание и вращение объектов в трехмерном
                пространстве напоминает реальные физические манипуляции.</p>
              </div>
              <div className='slide'>
              <p> <b>Персонализированный опыт</b>: Пользователи могут настраивать 3Dокружение под свои предпочтения, изменяя цвет, форму и другие аспекты
              объектов. Это создает ощущение индивидуальности и личной связи с
              контентом. Современные 3D-интерфейсы могут адаптироваться под
              поведение пользователя, предлагая контент, который соответствует его
              интересам и действиям. Это повышает уровень вовлеченности и
              удовлетворенности.</p>
              </div>
              <div className='slide'>
              <p> <b>Интерактивность:</b> Виртуальные объекты могут быть не только
                визуализированы, но и подвержены манипуляциям. Пользователи могут
                вращать, увеличивать, уменьшать или изменять параметры объектов, что
                открывает новые возможности для создания уникального контента.</p>
              </div>
              <div className='slide'>
                <p><b>Реакция на действия пользователей</b>: 3D-объекты могут реагировать
                на действия пользователей, создавая динамичное взаимодействие. Например,
                в играх объекты могут изменять свое состояние в зависимости от действий
                игрока.</p>
              </div>
              <div className='slide'>
                <p><b>Сетевое взаимодействие</b>: 3D-визуализация позволяет нескольким
                пользователям одновременно взаимодействовать в одном виртуальном
                пространстве. Это особенно полезно для образовательных и бизнесприложений, где команды могут работать над проектами, находясь в разных
                уголках мира</p>
              </div>
            </div>
        </Flex>
        <Flex vertical justify='center' align='center' style={{
          backgroundColor:'#E8F9F4',
          padding:'20px 0',
          width:'100%'
        }}>
          <div className='title'>
          3D-визуализация уже сейчас имеет активное применение в различных
          сферах жизни:
          </div>
          <div className="second_content_text">
          Образование: 3D-визуализация позволяет создавать учебные
          пространства, в которых студенты могут проводить эксперименты и
          исследования, не выходя из дома. Это особенно актуально для STEMдисциплин, где визуализация процессов может значительно улучшить
          понимание.
          </div>
          <div className="second_content_text">
          Маркетинг и реклама: Бренды могут использовать 3D-визуализацию
          для создания виртуальных магазинов, где пользователи могут
          взаимодействовать с продуктами перед покупкой. Это позволяет повысить
          уровень вовлеченности клиентов и снизить количество возвратов.
          Интерактивные 3D-рекламы могут привлекать больше внимания и создавать
          уникальный пользовательский опыт, который запоминается.
          </div>
          <div className="second_content_text">
          Развлечения: Интерактивные 3D-игры становятся все более
          популярными, обеспечивая игрокам возможность полного погружения в
          виртуальные миры. Использование 3D-визуализации в киноиндустрии
          позволяет создавать зрелищные эффекты и анимацию, которые значительно
          повышают качество контента.
          </div>
          <div className="second_content_text">
          Здравоохранение: 3D-визуализация может быть использована для
          тренировки врачей и студентов-медиков, позволяя им практиковаться на
          виртуальных пациентах.
          </div>
        </Flex>
        <Flex vertical justify='center' align='center' style={{
          backgroundColor:'#E8F9F4',
          padding:'50px 0',
          background:`url('${img}') no-repeat fixed`,
          width:'100%'
        }}>
          <div style={{
            color:'black',
            width:'50%',
            fontSize:'30px',
            textAlign:'justify',
            backgroundColor:'#E2F9F2',
            padding:'20px',
            borderRadius:'10px',
            textShadow:'1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff'
          }}>
            С развитием технологий, таких как виртуальная реальность (VR) и
            дополненная реальность (AR), 3D-визуализация и интерактивность будут
            только расширяться. Новые инструменты и платформы будут продолжать
            появляться, предоставляя пользователям все больше возможностей для
            взаимодействия с контентом. Кроме того, с развитием интернет-соединений
            (например, сетей 5G) улучшится скорость и качество передачи данных, что
            позволит реализовать более сложные и ресурсоемкие 3D-приложения.
          </div>
          <div style={{
            color:'black',
            width:'50%',
            fontSize:'30px',
            textAlign:'justify',
            marginTop:'50px',
            backgroundColor:'#E2F9F2',
            padding:'20px',
            borderRadius:'10px',
            textShadow:'1px 0 0 #fff,0 1px 0 #fff,-1px 0 0 #fff,0 -1px 0 #fff'
          }}>
            Таким образом, 3D-визуализация и интерактивность не только являются
            важными компонентами Web 3.0, но и представляют собой ключевые
            направления, которые формируют будущее цифровых технологий и
            пользовательского опыта. Они открывают новые возможности для бизнеса и
            пользователей, улучшая взаимодействие и создавая более богатый и
            разнообразный цифровой ландшафт.
          </div>
        </Flex>
        <Flex vertical justify='center' align='center' style={{
          backgroundColor:'white',
          width:'100%',
          paddingTop:'50px',
          paddingBottom:'50px',
        }}>
          <div className='first'>
              3
          </div>
          <div className='title'>
          ОСНОВНЫЕ ОБЛАСТИ ПРИМЕНЕНИЯ ИТ В
          КОНЦЕПЦИИ «WEB 3.0»: УДАЛЕННЫЙ ФОРМАТ РАБОТЫ
          </div>
          <div className='content_first'>
            <div style={{
              width:'70%',
              textAlign:'center',
              fontSize:'25px',
              marginBottom:'30px',
            }}>
            Удаленный формат работы, также известный как дистанционная работа,
            представляет собой модель, при которой сотрудники могут выполнять свои
            обязанности из любого места, используя технологии для связи и
            взаимодействия с коллегами и клиентами. С переходом на удаленный режим
            в условиях пандемии COVID-19, данный формат стал особенно актуальным и
            обрел широкую популярность. Это не только изменило подходы к
            организации труда, но и способствовало развитию новых технологий и
            инструментов, предназначенных для облегчения взаимодействия и
            повышения продуктивности.
            </div>
            <div className='title'>
              Ключевыми аспектами удаленного формата работы являются:
            </div>
            <div style={{
              width:'70%',
              borderTop:'2px dashed black',
              margin:'20px',
              padding:'20px',
              fontSize:'20px',
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
            Гибкость: Работники могут выбирать удобное для себя время и место
            для работы, что способствует повышению уровня удовлетворенности и
            баланса между работой и личной жизнью.
            </div>
            <div style={{
              width:'70%',
              borderTop:'2px dashed black',
              margin:'20px',
              padding:'20px',
              fontSize:'20px',
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
            Доступ к талантам: Организации могут нанимать специалистов из
            любой точки мира, не ограничиваясь географией.
            </div>
            <div style={{
              width:'70%',
              borderTop:'2px dashed black',
              margin:'20px',
              padding:'20px',
              fontSize:'20px',
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
            Снижение затрат: Удаленная работа может снизить затраты на
            аренду офисных помещений и другие сопутствующие расходы.
            </div>
            <div style={{
              width:'70%',
              textAlign:'center',
              fontSize:'25px',
              margin:'50px 0',
            }}>
            Для успешного функционирования удаленного формата работы
            необходима интеграция различных информационных технологий (ИТ),
            которые обеспечивают связь, совместную работу и управление проектами.
            Основные технологии, поддерживающие удаленный формат работы,
            включают:
            </div>
            <div style={{
              width:'70%',
              borderBottom:'2px dashed black',
              margin:'20px',
              padding:'20px',
              fontSize:'20px',
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
            Платформы для видеоконференций: Инструменты, такие как Zoom,
Microsoft Teams и Google Meet, позволяют проводить виртуальные встречи,
обеспечивая возможность визуального и аудиовзаимодействия между
участниками.
            </div>
            <div style={{
              width:'70%',
              borderBottom:'2px dashed black',
              margin:'20px',
              padding:'20px',
              fontSize:'20px',
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
            Системы управления проектами: Платформы, такие как Trello, Asana
и Jira, помогают командам организовывать работу, отслеживать задачи и
управлять проектами в режиме реального времени.
            </div>
            <div style={{
              width:'70%',
              borderBottom:'2px dashed black',
              margin:'20px',
              padding:'20px',
              fontSize:'20px',
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
            Облачные технологии: Облачные сервисы, такие как Google Drive и
Dropbox, позволяют хранить, обмениваться и совместно редактировать
документы, обеспечивая доступ к информации из любой точки мира.
            </div>
            <div style={{
              width:'70%',
              borderBottom:'2px dashed black',
              margin:'20px',
              padding:'20px',
              fontSize:'20px',
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
            Инструменты для совместной работы: Программы, такие как Slack и
Discord, обеспечивают возможность обмена сообщениями и создания каналов
для обсуждения различных тем, что способствует улучшению коммуникации
в командах.
            </div>
            
          </div>
        </Flex>
        <Flex vertical justify='center' align='center' style={{
          padding:'20px 0',
          background:`url('${img2}') no-repeat fixed`,
          width:'100%'
        }}>
            <div className='content_second_end'>
              <div className='content_second_end_text'>
              Одним из новых направлений в удаленном формате работы является
              использование 3D-рабочих мест и виртуальных встреч, которые обеспечивают
              более погружающий и интерактивный опыт взаимодействия. 3D-рабочие
              места позволяют создавать виртуальные офисы, где сотрудники могут
              «встретиться» и работать в одном пространстве, независимо от их
              физического местоположения. Это создает ощущение присутствия и
              способствует лучшему взаимодействию между членами команды.
              </div>
              <div className='content_second_end_text'>
              Такие платформы, как Spatial и Gather, предлагают пользователям
              возможность создавать и настраивать свои виртуальные офисы, используя
              аватары для представления себя. Это не только делает взаимодействие более
              личным, но и помогает поддерживать корпоративную культуру.
              </div>
              <div className='content_second_end_text'>
              Виртуальные встречи в 3D-формате позволяют участникам
              взаимодействовать с контентом в реальном времени. Например, во время
              презентации можно использовать 3D-модели для визуализации идей и
              концепций, что делает процесс обсуждения более динамичным и
              увлекательным.
              </div>
              <div className='content_second_end_text'>
              Удаленный формат работы продолжает развиваться, и все больше
              организаций принимают его как стандартную практику. По мере этого
              процесса наблюдается рост интереса к технологиям, которые обеспечивают
              более эффективное взаимодействие и управление.
              </div>
            </div>
        </Flex>
        <Flex vertical justify='center' align='center' style={{
          padding:'20px 0',
          background:'white',
          width:'100%'
        }}>
          <div className='title'>
            Текущие тренды:
          </div>
          <div className='ul_li'>
              <ul>
                <li>Увеличение использования искусственного интеллекта (ИИ) для
                автоматизации процессов и поддержки удаленных сотрудников.</li>
                <li>Появление новых платформ для виртуальных встреч и 3D-рабочих
                пространств, что позволяет улучшить качество взаимодействия и сделать его
                более эффективным.</li>
                <li>Развитие технологий безопасности и защиты данных, что становится
                важным в условиях удаленной работы.</li>
              </ul>
            </div>
            <div className='title'>
              Интернет-технологии, оказывающие наибольшее влияние на развитие
              удаленного формата работы: 
            </div>
            <div className='ul_li'>
              <ol>
                <li><b>Искусственный интеллект</b>: АИ имеет огромный потенциал для
                автоматизации рутинных задач, улучшения управления проектами и
                повышения эффективности взаимодействия. Использование ИИ в чат-ботах и
                системах поддержки позволяет быстро решать вопросы сотрудников,
                освобождая время для более важных задач.</li>
                <li><b>Дополненная реальность (AR) и виртуальная реальность (VR)</b>: Эти
                технологии открывают новые возможности для обучения, симуляций и
                виртуальных встреч, создавая более погружающий опыт. В частности, в
                обучении сотрудников можно использовать VR-средства для практики в
                безопасной виртуальной среде.</li>
                <li><b>Облачные решения</b>: Облачные технологии продолжают быть
                основой для удаленного доступа к данным и инструментам, позволяя
                сотрудникам работать из любой точки мира без потери производительности.</li>
              </ol>
            </div>
            <div style={{
              width:'70%',
              textAlign:'center',
              fontSize:'25px',
              margin:'30px 0',
              padding:'20px 0',
              borderBottom:'2px solid black',
              borderTop:'2px solid black',
            }}>
            Удаленный формат работы, поддерживаемый современными
            информационными технологиями, стал неотъемлемой частью бизнеспрактики в условиях меняющегося мира. С переходом на удаленные модели
            все больше организаций осознают преимущества гибкости и доступности, что
            в свою очередь стимулирует дальнейшее развитие ИТ. 3D-рабочие места,
            виртуальные встречи и другие инновации делают удаленный формат работы
            более эффективным и увлекательным, обеспечивая более высокое качество
            взаимодействия между сотрудниками и возможность применения новых
            технологий для повышения производительности.
            </div>
        </Flex>
        <Flex vertical justify='center' align='center' style={{
          padding:'20px 0',
          width:'100%'
        }}>
          <div className='title'>
            ЗАКЛЮЧЕНИЕ
          </div>
          <div className='text2'>
            <div className='text_1'>
              <div style={{
                width:'70%',
                background:'white',
                borderRadius:'20px',
                padding:'10px',
                marginLeft:'20px',
                boxShadow: `0px 5px 10px 7px rgba(34, 60, 80, 0.2)`,
              }}>Концепция Web 3.0 открывает перед нами новые горизонты развития
              интернета, предлагая не только улучшенные способы взаимодействия, но и
              переосмысление самого пользовательского опыта в цифровой среде. Одной из
              важнейших составляющих Web 3.0 является интеграция 3D-визуализации и
              интерактивных пространственных интерфейсов, которые позволяют создать
              более динамичные и погружающие виртуальные пространства. Эти
              технологии формируют уникальный пользовательский опыт, совмещая
              удобство, визуальную привлекательность и глубину взаимодействия, ранее
              недоступные в рамках Web 2.0.
              </div>
            </div>
            <div className='text_2'>
              <div style={{
                width:'70%',
                textAlign:'end',
                background:'white',
                borderRadius:'20px',
                padding:'10px',
                marginRight:'20px',
                boxShadow: `0px 5px 10px 7px rgba(34, 60, 80, 0.2)`,
              }}>С использованием 3D-технологий, метавселенных, а также виртуальной
              и дополненной реальности, пользователи получают возможность
              взаимодействовать с цифровыми объектами и контентом на более
              интуитивном уровне. Трехмерные интерфейсы и цифровые среды делают
              возможным создание по-настоящему интерактивного интернета, где человек
              может буквально «погрузиться» в контент, будь то виртуальная торговая
              площадка, образовательная платформа или развлекательное приложение.
              Такая форма представления данных позволяет не только упростить сложные
              операции и процессы, но и сделать взаимодействие более понятным и
              доступным за счет пространственного UX/UI.
              </div>
            </div>
            <div className='text_1'>
              <div style={{
                width:'70%',
                background:'white',
                borderRadius:'20px',
                padding:'10px',
                marginLeft:'20px',
                boxShadow: `0px 5px 10px 7px rgba(34, 60, 80, 0.2)`,
              }}>Удаленный формат работы, ставший неотъемлемой частью нашей
              жизни, также получает значительное развитие благодаря современным
              информационным технологиям. Появление 3D-рабочих мест и виртуальных
              встреч не только улучшает качество коммуникации и сотрудничества, но и
              создает новые возможности для обучения и взаимодействия. Технологии,
              такие как искусственный интеллект, дополненная и виртуальная реальность,
              становятся важными инструментами для оптимизации рабочих процессов и
              создания инновационных решений, способствующих повышению
              продуктивности.
              </div>
            </div>
            <div className='text_2'>
              <div style={{
                width:'70%',
                textAlign:'end',
                background:'white',
                borderRadius:'20px',
                padding:'10px',
                marginRight:'20px',
                boxShadow: `0px 5px 10px 7px rgba(34, 60, 80, 0.2)`,
              }}>Таким образом, сочетание Web 3.0, 3D-визуализации и удаленного
              формата работы представляет собой комплексный подход к созданию более
              интерактивного и доступного цифрового пространства. Эти изменения не
              только трансформируют способы взаимодействия пользователей с контентом,
              но и обеспечивают новые перспективы для бизнеса, образования и социальных
              взаимодействий. В условиях стремительного технологического прогресса
              можно с уверенностью сказать, что будущее принадлежит тем, кто готов
              адаптироваться и внедрять инновации, способные обогатить наш опыт
              взаимодействия с миром.
              </div>
            </div>
          </div>
        </Flex>
      </div>
      
      <div className="footer">
        Работу выполнил студент группы ИДМ-24-06 Кузьмичев Даниил Сергеевич
      </div>
    </div>
  )
}

export default App
