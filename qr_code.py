### this python scrip reads the array of the ecg, graphs it **need to incorporate onto webpage**
### the link to the page will be stored in a qr code
### task: rewrite graph in react and add slider

import qrcode
import matplotlib.pyplot as plt
import numpy as np

#mock ecg data
ecgarr = np.array([1,100])

##plot
#receive array
x = ecgarr
y = np.array([-1,1])

plt.plot(x, y)
plt.savefig('ecg.png')

#store as image and link to qr code

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

#should add hyperlink
qr.add_data('ecg.png')
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save('qrc.png')


