import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

import theme from 'common/theme'

export default function DonationIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 76 96">
      <g clipPath="url(#clip0)">
        <path
          d="M2.37493 57.5999H3.56239V75.5999C3.56154 75.758 3.59162 75.9148 3.65091 76.0611C3.7102 76.2075 3.79754 76.3406 3.90789 76.4527C4.01824 76.5648 4.14944 76.6538 4.29394 76.7145C4.43843 76.7752 4.59338 76.8065 4.74988 76.8065C4.90637 76.8065 5.06132 76.7752 5.20581 76.7145C5.35031 76.6538 5.48151 76.5648 5.59186 76.4527C5.70221 76.3406 5.78955 76.2075 5.84884 76.0611C5.90813 75.9148 5.93821 75.758 5.93736 75.5999V57.5999H70.0607V75.5999C70.0598 75.758 70.0899 75.9148 70.1492 76.0611C70.2085 76.2075 70.2958 76.3406 70.4062 76.4527C70.5165 76.5648 70.6477 76.6538 70.7922 76.7145C70.9367 76.7752 71.0917 76.8065 71.2482 76.8065C71.4047 76.8065 71.5596 76.7752 71.7041 76.7145C71.8486 76.6538 71.9798 76.5648 72.0902 76.4527C72.2005 76.3406 72.2878 76.2075 72.3471 76.0611C72.4064 75.9148 72.4365 75.758 72.4357 75.5999V57.5999H73.6231C73.935 57.5999 74.2438 57.5378 74.532 57.4172C74.8201 57.2966 75.0819 57.1198 75.3025 56.897C75.523 56.6741 75.6979 56.4095 75.8173 56.1183C75.9366 55.8272 75.9981 55.5151 75.998 55.1999V52.7999C75.9981 52.4847 75.9366 52.1726 75.8173 51.8815C75.6979 51.5903 75.523 51.3257 75.3025 51.1029C75.0819 50.88 74.8201 50.7032 74.532 50.5826C74.2438 50.462 73.935 50.3999 73.6231 50.3999H2.37493C2.06304 50.3999 1.75421 50.462 1.46607 50.5826C1.17792 50.7032 0.916112 50.88 0.695579 51.1029C0.475046 51.3257 0.300111 51.5903 0.180763 51.8815C0.0614157 52.1726 -7.7966e-06 52.4847 7.42275e-10 52.7999L7.42275e-10 55.1999C-7.7966e-06 55.5151 0.0614157 55.8272 0.180763 56.1183C0.300111 56.4095 0.475046 56.6741 0.695579 56.897C0.916112 57.1198 1.17792 57.2966 1.46607 57.4172C1.75421 57.5378 2.06304 57.5999 2.37493 57.5999ZM2.37493 52.7999H73.6231V55.1999H2.37493V52.7999Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M42.5117 47.9999C42.5208 47.9649 42.5348 47.9314 42.5433 47.8961C42.5651 47.9297 42.5864 47.966 42.6082 47.9999H47.043C47.1158 47.905 47.1837 47.8063 47.2463 47.7043C47.6543 47.0352 53.1562 38.5144 54.7618 36.6151C56.4475 34.7861 58.3196 33.1421 60.347 31.7105C62.7091 29.9069 65.1276 28.0574 66.8943 25.7071C67.5239 26.0846 68.2292 26.3146 68.9583 26.3803C69.6874 26.4461 70.4219 26.3458 71.1076 26.087L72.8607 25.4281C73.4643 25.2053 74.0173 24.8618 74.4866 24.4183C74.9559 23.9747 75.332 23.4401 75.5923 22.8464C75.8486 22.2682 75.987 21.6437 75.9991 21.0103C76.0113 20.3768 75.897 19.7473 75.6631 19.1595L69.3172 3.06431C68.956 2.15304 68.3312 1.37307 67.5244 0.826352C66.7177 0.279636 65.7664 -0.00838748 64.795 -6.89044e-05C64.2083 -0.000286397 63.6262 0.105697 63.0764 0.312861L61.3233 0.971787C60.7197 1.19459 60.1667 1.53803 59.6974 1.98158C59.2281 2.42513 58.852 2.95971 58.5917 3.55339C58.343 4.11804 58.2059 4.72632 58.188 5.34409C56.8606 5.88218 55.4902 6.30514 54.0918 6.6084C51.1296 7.00917 48.1419 7.18562 45.1537 7.13629C44.2908 7.13629 43.3986 7.12472 42.5019 7.10187C42.4555 7.10067 42.4088 7.10007 42.362 7.10007C41.4872 7.0983 40.6246 7.30852 39.8468 7.7131C39.0689 8.11769 38.3983 8.70484 37.8913 9.42533C35.1488 13.3504 28.2235 24.0675 27.93 24.5219L27.6862 24.8992L27.5945 25.3402C27.5768 25.4253 25.7566 35.3927 25.5338 40.4803C25.5119 40.9207 25.5794 41.3609 25.732 41.7739C25.8846 42.1869 26.1191 42.5641 26.4212 42.8821C26.7283 43.2046 27.0965 43.4611 27.5039 43.6365C27.9113 43.8119 28.3495 43.9025 28.7923 43.903C28.8205 43.903 28.848 43.899 28.8762 43.8982C28.4336 45.2221 28.3837 46.6478 28.7326 47.9999H31.2291C31.2185 47.9736 31.2032 47.9502 31.1931 47.9237C30.9131 47.1934 30.8142 46.405 30.9051 45.6273C30.9961 44.8495 31.274 44.1061 31.7147 43.4619C32.1554 42.8177 32.7454 42.2922 33.4333 41.9315C34.1212 41.5708 34.886 41.3857 35.6609 41.3923C36.4359 41.399 37.1975 41.5973 37.8791 41.9699C38.5608 42.3425 39.1419 42.878 39.5716 43.5298C40.0013 44.1815 40.2666 44.9296 40.3444 45.7088C40.4221 46.488 40.3099 47.2746 40.0176 47.9999H42.5117ZM62.1512 3.22124L63.9043 2.56231C64.1893 2.45496 64.4909 2.39997 64.795 2.39993C65.2903 2.3957 65.7755 2.5413 66.1882 2.818C66.6009 3.09471 66.9222 3.48986 67.1109 3.95263L73.4568 20.0478C73.5721 20.3474 73.6265 20.6674 73.617 20.9887C73.6075 21.31 73.5341 21.6261 73.4012 21.9181C73.2684 22.2102 73.0788 22.4723 72.8437 22.6888C72.6086 22.9054 72.3328 23.0719 72.0328 23.1786C72.0328 23.1786 69.6853 23.9999 69.389 23.9999C68.8937 24.0042 68.4085 23.8586 67.9958 23.5819C67.5831 23.3051 67.2617 22.91 67.0731 22.4472L60.7272 6.35204C60.6119 6.05245 60.5574 5.73249 60.567 5.41119C60.5765 5.08989 60.6499 4.7738 60.7827 4.48173C60.9156 4.18966 61.1052 3.92756 61.3403 3.71102C61.5754 3.49448 61.8511 3.32792 62.1512 3.22124H62.1512ZM33.7349 35.1721C33.1139 37.1143 30.6689 39.447 29.702 40.8667C29.6371 40.962 29.5602 41.0642 29.4747 41.1702C29.359 41.3157 29.2011 41.4207 29.0231 41.4706C28.8451 41.5204 28.6562 41.5125 28.4829 41.448C28.3096 41.3835 28.1607 41.2657 28.0573 41.111C27.9539 40.9565 27.9011 40.7729 27.9064 40.5864C28.1179 35.7564 29.8746 26.046 29.9187 25.8337C29.9187 25.8337 37.0823 14.744 39.8314 10.8096C40.1188 10.4027 40.4986 10.0714 40.939 9.84352C41.3793 9.61565 41.8673 9.49786 42.362 9.50003C42.3887 9.50003 42.4153 9.50036 42.442 9.50105C43.4013 9.52548 44.3052 9.53721 45.1537 9.53624C48.2787 9.58974 51.4031 9.40136 54.4996 8.97275C55.9341 8.67089 57.3412 8.24863 58.7063 7.71039L64.8668 23.3356C64.955 23.5579 65.0593 23.7733 65.1789 23.9801C63.6206 26.1785 61.3309 27.9511 58.9161 29.7951C56.7484 31.3277 54.7503 33.0916 52.956 35.0562C51.1452 37.1984 45.3924 46.1518 45.2045 46.4784C45.0768 46.7003 44.9517 46.7999 44.8307 46.7999C43.8766 46.7999 43.1844 40.5993 43.5597 39.3292C44.04 37.3525 46.0146 33.7636 46.7367 32.5414C48.5092 29.5425 50.8274 24.1887 48.6946 20.9579C48.3732 20.4825 47.9517 20.0848 47.4604 19.7935C46.969 19.5021 46.4199 19.3242 45.8524 19.2726C45.7582 19.2651 45.6647 19.2613 45.5719 19.2613C45.1225 19.2586 44.6774 19.3506 44.2652 19.5316C43.853 19.7125 43.4827 19.9784 43.1779 20.3123C42.109 21.4663 35.8219 28.79 35.2117 29.4019C34.5558 29.9789 34.0299 34.2495 33.7349 35.1721ZM35.6225 38.9999C35.1218 39.0023 34.6227 39.0583 34.1337 39.167C34.9326 38.1961 35.562 37.0946 35.9948 35.91C36.1749 35.2516 36.3182 34.5835 36.424 33.9088C36.591 32.8926 36.8117 31.8861 37.0851 30.8937C37.5946 30.3399 38.7855 28.9723 41.0304 26.3872C42.6996 24.4649 44.4256 22.4773 44.9118 21.9523C44.9946 21.8586 45.0964 21.7841 45.2104 21.7339C45.3243 21.6837 45.4476 21.6589 45.5719 21.6613C45.6027 21.6613 45.6337 21.6626 45.665 21.6651C45.8745 21.6885 46.0768 21.7564 46.2586 21.8643C46.4403 21.9722 46.5975 22.1177 46.7198 22.2912C47.9255 24.1176 46.5732 28.1376 44.6977 31.3108C44.5843 31.5028 41.9177 36.0342 41.2551 38.7492C41.0878 39.7001 41.0449 40.6691 41.1276 41.6313C40.4587 40.8097 39.6183 40.1478 38.6666 39.6929C37.7148 39.238 36.6754 39.0014 35.6225 38.9999Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M28.0557 66.0316C28.3099 64.9757 28.9123 64.0386 29.7638 63.3748C30.6152 62.7109 31.665 62.3598 32.7403 62.3792C33.8155 62.3986 34.8522 62.7873 35.6797 63.4815C36.5072 64.1756 37.0761 65.1338 37.2929 66.1983C37.9159 66.0685 38.5502 66.0021 39.1863 66C39.4361 66 39.6839 66.0124 39.9303 66.0316C40.1748 65.0427 40.7248 64.1583 41.5005 63.5069C42.2763 62.8554 43.2373 62.4708 44.2441 62.4088C45.2509 62.3469 46.251 62.6109 47.0992 63.1625C47.9474 63.7141 48.5995 64.5246 48.9609 65.4762C49.0485 65.711 49.118 65.9524 49.1686 66.198C49.7913 66.0685 50.4252 66.0021 51.061 66C51.2289 66 51.3927 66.0167 51.5585 66.0255C51.3867 64.9706 50.9844 63.9677 50.3808 63.0897C49.7772 62.2116 48.9876 61.4806 48.0693 60.9497C47.151 60.4188 46.1272 60.1014 45.0723 60.0206C44.0174 59.9398 42.9579 60.0976 41.9709 60.4825C40.5889 61.0195 39.4082 61.9807 38.5948 63.2309C37.7996 62.0142 36.6572 61.0705 35.3192 60.5247C33.9812 59.9789 32.5106 59.857 31.1024 60.1749C29.6942 60.4929 28.4149 61.2358 27.434 62.3052C26.4531 63.3745 25.817 64.7199 25.6099 66.1629C26.1711 66.0569 26.7407 66.0024 27.3116 66C27.5614 66 27.8093 66.0124 28.0557 66.0316Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M20.187 75.6C20.187 75.7575 20.2177 75.9136 20.2774 76.0592C20.3371 76.2048 20.4245 76.337 20.5348 76.4485C20.6451 76.5599 20.776 76.6483 20.9201 76.7086C21.0641 76.7689 21.2185 76.7999 21.3745 76.7999C21.5304 76.7999 21.6848 76.7689 21.8289 76.7086C21.973 76.6483 22.1039 76.5599 22.2141 76.4485C22.3244 76.337 22.4119 76.2048 22.4716 76.0592C22.5312 75.9136 22.5619 75.7575 22.5619 75.6C22.5612 74.9692 22.6836 74.3445 22.922 73.7615C23.1604 73.1785 23.5101 72.6487 23.9513 72.2025C24.3924 71.7562 24.9163 71.4022 25.4929 71.1606C26.0695 70.919 26.6876 70.7947 27.3118 70.7947C27.936 70.7947 28.5541 70.919 29.1307 71.1606C29.7074 71.4022 30.2312 71.7562 30.6724 72.2025C31.1135 72.6487 31.4633 73.1785 31.7016 73.7615C31.94 74.3445 32.0624 74.9692 32.0617 75.6C32.0608 75.7581 32.0909 75.9149 32.1502 76.0612C32.2095 76.2075 32.2968 76.3406 32.4072 76.4527C32.5175 76.5649 32.6487 76.6539 32.7932 76.7146C32.9377 76.7753 33.0927 76.8065 33.2492 76.8065C33.4057 76.8065 33.5606 76.7753 33.7051 76.7146C33.8496 76.6539 33.9808 76.5649 34.0912 76.4527C34.2015 76.3406 34.2888 76.2075 34.3481 76.0612C34.4074 75.9149 34.4375 75.7581 34.4366 75.6C34.436 74.9692 34.5583 74.3445 34.7967 73.7615C35.0351 73.1785 35.3848 72.6487 35.826 72.2025C36.2671 71.7562 36.791 71.4022 37.3676 71.1606C37.9442 70.919 38.5623 70.7947 39.1865 70.7947C39.8107 70.7947 40.4288 70.919 41.0054 71.1606C41.5821 71.4022 42.1059 71.7562 42.5471 72.2025C42.9882 72.6487 43.338 73.1785 43.5764 73.7615C43.8147 74.3445 43.9371 74.9692 43.9364 75.6C43.9364 75.9182 44.0615 76.2234 44.2842 76.4485C44.5069 76.6735 44.8089 76.7999 45.1239 76.7999C45.4388 76.7999 45.7408 76.6735 45.9635 76.4485C46.1862 76.2234 46.3113 75.9182 46.3113 75.6C46.3106 74.9692 46.433 74.3445 46.6714 73.7615C46.9097 73.1785 47.2595 72.6487 47.7006 72.2025C48.1418 71.7562 48.6656 71.4022 49.2423 71.1606C49.8189 70.919 50.437 70.7947 51.0612 70.7947C51.6854 70.7947 52.3035 70.919 52.8801 71.1606C53.4567 71.4022 53.9806 71.7562 54.4217 72.2025C54.8629 72.6487 55.2126 73.1785 55.451 73.7615C55.6894 74.3445 55.8118 74.9692 55.8111 75.6C55.8102 75.7581 55.8403 75.9149 55.8996 76.0612C55.9589 76.2075 56.0462 76.3406 56.1566 76.4527C56.2669 76.5649 56.3981 76.6539 56.5426 76.7146C56.6871 76.7753 56.8421 76.8065 56.9985 76.8065C57.155 76.8065 57.31 76.7753 57.4545 76.7146C57.599 76.6539 57.7302 76.5649 57.8405 76.4527C57.9509 76.3406 58.0382 76.2075 58.0975 76.0612C58.1568 75.9149 58.1869 75.7581 58.186 75.6C58.1869 74.0527 57.6942 72.5463 56.781 71.3043C55.8678 70.0623 54.5828 69.1508 53.1166 68.705C51.6503 68.2592 50.0809 68.3029 48.6412 68.8295C47.2014 69.3562 45.968 70.3377 45.1238 71.6286C44.4756 70.6362 43.5939 69.8218 42.5577 69.2584C41.5215 68.6949 40.3632 68.3999 39.1865 68.3999C38.0098 68.3999 36.8515 68.6949 35.8153 69.2584C34.7791 69.8218 33.8974 70.6362 33.2491 71.6286C32.4049 70.3378 31.1715 69.3562 29.7318 68.8296C28.292 68.303 26.7227 68.2593 25.2564 68.7051C23.7902 69.1509 22.5052 70.0624 21.5921 71.3044C20.6789 72.5464 20.1862 74.0527 20.187 75.6Z"
          fill={theme.palette.primary.main}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="76" height="96" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}
