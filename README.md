# Dental Recruiting Project

## Getting Stated

<img src="https://img.shields.io/badge/version-v1.0.0-orange"/>
<img src="https://img.shields.io/badge/language-Typescript-blue"/>
<img src="https://img.shields.io/badge/framework-Next.js-%2306bcee"/>
<img src="https://img.shields.io/badge/state%20management-Jotai%2C%20React%20Query-red"/>
<img src="https://img.shields.io/badge/ui%20library-Radix-%239f55ff"/>
<img src="https://img.shields.io/badge/css-TailwindCSS-%2338b2ac"/>

### Cloning the Github Repository

```sh
$ git clone
```

### Installation

```sh
$ yarn
$ yarn dev
```

### Project structure

```bash
├── README.md - Readme file
│
├── src/ – source folder
│   │
│   ├── app/ - Core application logic and components
│   │   ├── layouts/ - Common layout components for pages (e.g., headers, footers)
│   │   │
│   │   ├── pages/ - Page components for each route
│   │
│   ├── components/ - Common component folder
│   │
│   ├── constants/ - Common constants folder
│   │
│   ├── containers/ - Higher-order components and data-fetching components
│   │
│   ├── hooks/ - common hooks, queries folder
│   │
│   ├── interfaces/ - common interface definition folder
│   │
│   ├── libs/ - External library folder
│   │
│   ├── services/ - API request folder
│   │
│   ├── states/ - Global state management folder
│   │
│   ├── styles/ - Common element folder related to style sheets
│   │
│   ├── utils/ - Utilities folder
│   │
│
```

- 📁 `src`

  - 📄 `app`

    - Core application logic and components.

  - 📄 `assets`

    - A folder for managing static resources such as fonts, images, colors, languages, etc.

  - 📄 `components`

    - Organized by common components, folder names are in PascalCase.
    - Represents hierarchical structure.
    - If there are multiple sub-components constituting a main component, they are organized under the /components folder.

  - 📄 `constants`

    - A folder for managing common constants.

  - 📄 `containers`

    - A folder for managing components that load and manage data.
    - Manages the context for pages in the app.

  - 📄 `hooks`

    - A folder for managing common hooks.
    - queries contains only content related to queries.
    - queryKeys manages the keys of queries and is used by importing them.

  - 📄 `interfaces`

    - Organized into feature-based folders inside interfaces, folder names are in PascalCase.
    - A folder for defining the types of API request and response data.
    - Applicable even when not dependent on one place but used in multiple areas (store, page, API).
    - Types of data used only in the store or page are defined in each file.
    - For interfaces commonly used in screens, consider integrating them into common components.

  - 📄 `states`

    - A collective folder defining data shared across multiple components (screens) and not dependent on a single component.
    - Added based on feature, not screen unit.
    - Primarily uses the jotai feature for the Store.

  - 📄 `utils`

    - A folder for defining utility functions.
    - Created in each folder, similar functions are grouped together.
    - If export default / single function, the folder name is also in camelCase like the function name.
    - If export default / not a single function, the folder name is in PascalCase.
    - If multiple exports (including default), the folder name uses a word that represents the functionality, in PascalCase.

### **Naming Convention**

- Conventions for variables, functions, filenames, and TypeScript.
- Reference Links:
  - [naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
  - [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
  - [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

### **Open Source (Third Party Library) Checklist**

- Purpose of Introduction
  - Enhancement of components / features / productivity (testing).
  - Issue resolution, structural improvements, refactoring, etc.
- Open Source Verification
  - Recognition, such as GitHub star count.
  - Stability, such as the number of issues.
  - License.
  - Customizability.
- Considerations When Applying to the Project
  - Check if the existing project's installed packages (libraries) provide the same functionality.
    - If so, verify if the desired technical requirements are met with the existing package.
    - If not, consider applying new technology following the above verification process.
  - Consider version dependencies with other libraries in the existing project when introducing new libraries.

### **Documentation**

- Write documentation focused on features, not based on files.
- Detailing screen business logic, policies, and key core functionalities that are hard to understand from product logic.
- Detailed specifications of common functions.
- Comments in each file should be written using JSDoc/TSDoc.

### **Common Components**

- Use **`@radix-ui`**.
- Find and install the desired UI from the components tab in the [radix official documentation](https://www.radix-ui.com/primitives/docs/overview/introduction).
- When importing **`@radix-ui`**, prefix it with **`R`**.
  ```
  tsCopy code
  import * as RSelect from "@radix-ui/react-select";
  const Select = () => {
    return <RSelect.Root>...</RSelect.Root>;
  };

  ```

### **Branch & Commit Style**

- Branch Name format: [name]/[objective]/[keyword]
  - Example: ymy/d/readme
- Commit Message format: [[objective]] [message]
  - Example: [docs] Add README including installation guide, branch, and commit conventions.
  - Write the message as detailed as possible.

| Branch | Commit   | Objective                                        |
| ------ | -------- | ------------------------------------------------ |
| f      | feat     | Feature addition, library addition, API change   |
| r      | refactor | Code structure change - Refactoring              |
| b      | bugfix   | Bug fixes                                        |
| d      | docs     | Document modification - README or guides, etc.   |
| test   | test     | Test code writing                                |
| c      | chore    | Modifications to config and other settings files |

### **GitHub Merge Request & Code Review Guide**

- Rebase Target Branch before registering MR
  - [What is Rebase?](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0)
  - After MR registration, resolve conflicts through Merge (not Rebase, refer to the above link)
