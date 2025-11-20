# Car Sharing System Requirements

## 1. Use Cases List (UC)

| ID | Use Case Name |
|:---|:---|
| **UC01** | Login |
| **UC02** | Register User |
| **UC03** | Reset Password |
| **UC04** | Verify License |
| **UC05** | Search Car |
| **UC06** | Start Rental |
| **UC07** | End Rental |
| **UC08** | Check Availability |
| **UC09** | Unlock Car |
| **UC10** | Lock Car |
| **UC11** | View Car Details |
| **UC12** | View Reviews |
| **UC13** | Add Review |
| **UC14** | Report Problem |
| **UC15** | View Rental History |
| **UC16** | Pay for Car |
| **UC17** | Calculate Cost |
| **UC18** | Get Location |
| **UC19** | Manage Fleet |
| **UC20** | Manage Users |
| **UC21** | View Rentals |
| **UC22** | View Statistics |
| **UC23** | View Car on Map (Admin) |
| **UC24** | Set Pricing |
| **UC25** | Verify Payment |
| **UC26** | Generate Report |

---

## 2. Functional Requirements (FR)

| ID | Requirement Name |
|:---|:---|
| **FR01** | Register User |
| **FR02** | Login |
| **FR03** | Reset Password |
| **FR04** | Search Car |
| **FR05** | Start Rental |
| **FR06** | End Rental |
| **FR07** | Pay for Car |
| **FR08** | View Reviews |
| **FR09** | Add Review |
| **FR10** | Report Problem |
| **FR11** | View Car Details |
| **FR12** | View Rental History |
| **FR13** | Check Availability |
| **FR14** | Manage Fleet |
| **FR15** | Manage Users |
| **FR16** | View Rentals |
| **FR17** | View Statistics |
| **FR18** | View Car on Map |
| **FR19** | Set Pricing |
| **FR20** | Verify License |
| **FR21** | Verify Payment |
| **FR22** | Get Location |
| **FR23** | Calculate Cost |
| **FR24** | Unlock / Lock Car |

---

## 3. Non-Functional Requirements (NFR)

| ID | Category | Specification |
|:---|:---|:---|
| **NFR01** | **Availability** | Система повинна мати рівень доступності **99.9%** (High Availability). Допускається планове технічне вікно (downtime) не більше 4 годин на місяць у нічний час. |
| **NFR02** | **Performance** | Час відповіді сервера (API Latency) на 95% запитів не повинен перевищувати **2000 мс (2 сек)** при нормальному навантаженні. |
| **NFR03** | **Scalability** | Система повинна підтримувати роботу **1000 конкурентних користувачів** (concurrent users, що одночасно надсилають запити) та масштабуватися до бази в 50,000+ акаунтів. |
| **NFR04** | **Security** | Персональні дані мають шифруватися (AES-256), паролі хешуватися (bcrypt/Argon2). Обробка платежів повинна відповідати стандарту **PCI DSS**. |
| **NFR05** | **Usability** | Інтерфейс має бути адаптивним (Responsive Design) та коректно відображатися на мобільних пристроях (Mobile First approach). |

---

## 4. Traceability Matrix (FR ↔ UC)

| FR ID | Functional Requirement | Implemented via Use Cases (UC ID) |
|:---|:---|:---|
| **FR01** | Register User | `UC02`, `UC04` |
| **FR02** | Login | `UC01` |
| **FR03** | Reset Password | `UC03`, `UC01` |
| **FR04** | Search Car | `UC05`, `UC08`, `UC18` |
| **FR05** | Start Rental | `UC06`, `UC08`, `UC09` |
| **FR06** | End Rental | `UC07`, `UC10`, `UC17` |
| **FR07** | Pay for Car | `UC16`, `UC17`, `UC25` |
| **FR08** | View Reviews | `UC12`, `UC05` |
| **FR09** | Add Review | `UC13` |
| **FR10** | Report Problem | `UC14` |
| **FR11** | View Car Details | `UC11`, `UC12` |
| **FR12** | View Rental History | `UC15` |
| **FR13** | Check Availability | `UC06`, `UC08` |
| **FR14** | Manage Fleet | `UC19` |
| **FR15** | Manage Users | `UC20` |
| **FR16** | View Rentals | `UC21` |
| **FR17** | View Statistics | `UC22`, `UC15`, `UC26` |
| **FR18** | View Car on Map | `UC23`, `UC18` |
| **FR19** | Set Pricing | `UC24` |
| **FR20** | Verify License | `UC04`, `UC02` |
| **FR21** | Verify Payment | `UC25`, `UC16` |
| **FR22** | Get Location | `UC18`, `UC05`, `UC23` |
| **FR23** | Calculate Cost | `UC17`, `UC06`, `UC07`, `UC24` |
| **FR24** | Unlock / Lock Car | `UC09`, `UC10`, `UC06`, `UC07` |