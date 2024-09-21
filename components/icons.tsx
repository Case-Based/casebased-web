import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.2791 20.2879V20.2879C21.8864 20.2879 23.9999 18.1743 23.9999 15.5671V6.5C23.9999 3.73858 21.7614 1.5 18.9999 1.5H9.81367C7.2196 1.5 5.1167 3.60291 5.1167 6.19697V6.19697"
        stroke="#101010" strokeWidth="2"/>
      <path
        d="M1 20.5L1 9.89394C1 7.6848 2.79086 5.89395 5 5.89395H15.7106C17.9198 5.89395 19.7107 7.68481 19.7107 9.89395V20.5C19.7107 22.7091 17.9198 24.5 15.7107 24.5H10.3553H5C2.79086 24.5 1 22.7091 1 20.5Z"
        stroke="#101010" strokeWidth="2"/>
      <path
        d="M13.0107 14.0227H10.6073C10.5902 13.8239 10.5448 13.6435 10.4709 13.4815C10.3999 13.3196 10.3005 13.1804 10.1726 13.0639C10.0476 12.9446 9.89564 12.8537 9.71666 12.7912C9.53768 12.7259 9.33456 12.6932 9.10729 12.6932C8.70956 12.6932 8.37291 12.7898 8.09734 12.983C7.82461 13.1761 7.61723 13.4531 7.47518 13.8139C7.33598 14.1747 7.26638 14.608 7.26638 15.1136C7.26638 15.6477 7.3374 16.0952 7.47944 16.456C7.62433 16.8139 7.83314 17.0838 8.10587 17.2656C8.37859 17.4446 8.70672 17.5341 9.09024 17.5341C9.30899 17.5341 9.50501 17.5071 9.67831 17.4531C9.8516 17.3963 10.0022 17.3153 10.13 17.2102C10.2579 17.1051 10.3615 16.9787 10.4411 16.831C10.5235 16.6804 10.5789 16.5114 10.6073 16.3239L13.0107 16.3409C12.9823 16.7102 12.8786 17.0867 12.6996 17.4702C12.5206 17.8509 12.2664 18.2031 11.9368 18.527C11.6101 18.848 11.2053 19.1065 10.7223 19.3026C10.2394 19.4986 9.67831 19.5966 9.0391 19.5966C8.23797 19.5966 7.51922 19.4247 6.88285 19.081C6.24933 18.7372 5.74791 18.2315 5.37859 17.5639C5.01211 16.8963 4.82888 16.0796 4.82888 15.1136C4.82888 14.1421 5.01638 13.3239 5.39138 12.6591C5.76638 11.9915 6.27206 11.4872 6.90842 11.1463C7.54479 10.8026 8.25501 10.6307 9.0391 10.6307C9.59024 10.6307 10.0973 10.706 10.5604 10.8565C11.0235 11.0071 11.4297 11.2273 11.7792 11.5171C12.1286 11.804 12.4098 12.1577 12.6229 12.5781C12.836 12.9986 12.9652 13.4801 13.0107 14.0227ZM15.3981 19.6136C15.0686 19.6136 14.7859 19.4986 14.5501 19.2685C14.3172 19.0355 14.2021 18.7528 14.2049 18.4205C14.2021 18.0966 14.3172 17.8196 14.5501 17.5895C14.7859 17.3594 15.0686 17.2443 15.3981 17.2443C15.7106 17.2443 15.9862 17.3594 16.2248 17.5895C16.4663 17.8196 16.5885 18.0966 16.5913 18.4205C16.5885 18.6421 16.5302 18.8438 16.4166 19.0256C16.3058 19.2046 16.1609 19.348 15.9819 19.456C15.803 19.5611 15.6084 19.6136 15.3981 19.6136Z"
        fill="#101010"/>
    </svg>

  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}
