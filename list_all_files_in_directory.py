import os
import eel
import random
import time
global p

p = "\t"
a= random.randint(1000,50000)

eel.init('web')
options = {
    'host': 'localhost',
    'port': a
    }

curr_dir = os.getcwd()
eel.show_dir(curr_dir)

def main(a,count):
    b = os.listdir(a)
    count = count
    if b == '':
    	pass
    elif b != '':
    	for c in b:
    		m = os.getcwd()
    		if os.path.isdir(c):
    			os.chdir(c)
    			y = os.getcwd()
    			eel.show_dir(y)
    			count += 1
    			l = p*count+'__' +c+'\n'
    			eel.find_the_files(l)
    			mainn(y,count)
    			os.chdir(m)
    			eel.show_dir(m)
    			count -= 1
    		else:
    			count += 1
    			eel.show_dir(m)
    			l = p*count+'__' +c+'\n'
    			eel.find_the_files(l)
    			count -= 1
    
    	
    			
def mainn(a,aa):
	k = aa
	d = os.listdir(a)
	if d == '':
		pass
	elif d != '':
		for e in d:
			l = os.getcwd()
			if os.path.isdir(e):
				os.chdir(e)
				eel.show_dir(e)
				o = os.getcwd()
				k += 1
				fil = p*k+'__' +e+'\n'
				eel.find_the_files(fil)
				main(o,k)
				os.chdir(l)
				eel.show_dir(l)
				k -= 1
			else:
				k += 1
				fil = p*k+'__' +e+'\n'
				eel.show_dir(l)
				eel.find_the_files(fil)
				k -= 1

@eel.expose
def automate(a):
    original = os.getcwd()
    global original
    try:
        os.chdir(a)
        cw = os.getcwd()
        eel.show_dir(cw)
        print "....successful"
        yy = -1
        eel.starting()
        start_time = time.time()
        main(cw,yy)
        stop_time = time.time()
        time_taken = str(stop_time - start_time)
        print time_taken
        eel.done(time_taken[:7])
    except:
        print 'failed'
    
@eel.expose
def back():
    os.chdir(original)
    eel.show_dir(original)
    
        
eel.start('find_files.html',size = (400,600), options = options,block= False)
while True:
    eel.sleep(3)
    
