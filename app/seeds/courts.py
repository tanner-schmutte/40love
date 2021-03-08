from app.models import db, Court


def seed_courts():

    seed = [
        Court(name='Dolores Park', address='Dolores St &, 19th St, San Francisco, CA 94114', latitude=37.761, longitude=-122.4272),
        Court(name='Lafayette Park', address='Gough St &, Washington St, San Francisco, CA 94109', latitude=37.79265, longitude=-122.42617),
        Court(name='Golden Gate Park', address='San Francisco, CA', latitude=37.7702, longitude=-122.459),
        Court(name='McCoppin Square', address='1200 Taraval St, San Francisco, CA 94116', latitude=37.7428, longitude=-122.48042),
        Court(name='Margaret Osborne DuPont Park', address='336 31st Ave, San Francisco, CA 94121', latitude=37.78269, longitude=-122.49083),
        Court(name='Corona Heights Park', address='Roosevelt Way &, Museum Way, San Francisco, CA 94114', latitude=37.7653, longitude=-122.4386),
        Court(name='Crocker Amazon Playground', address='799 Moscow St, San Francisco, CA 94112', latitude=37.7138207, longitude=-122.431916),
        Court(name='Potrero Recreation Center', address='801 Arkansas St, San Francisco, CA 94107', latitude=37.7569, longitude=-122.397),
        Court(name='Buena Vista Park', address='Buena Vista & Haight Street, San Francisco, CA 94117', latitude=37.7684, longitude=-122.4414),
        Court(name='Alamo Square Park', address='Steiner St & Hayes Street, San Francisco, CA 94117', latitude=37.7764, longitude=-122.4347),
        Court(name='Presidio YMCA Ruger', address='563 Ruger St, San Francisco, CA 94129', latitude=37.8021, longitude=-122.4317),
        Court(name='Alice Marble', address='1200 Greenwich St, San Francisco, CA 94109', latitude=37.80169, longitude=-122.420069),
        Court(name='Hamilton', address='Geary &, Steiner St, San Francisco, CA 94115', latitude=37.7846658, longitude=-122.435976),
        Court(name='SFSU', address='1600 Holloway Ave, San Francisco, CA 94132', latitude=37.725989, longitude=-122.483363),
        Court(name='James Rolph Jr Playground', address='2850 Cesar Chavez, San Francisco, CA 94110', latitude=37.7504211, longitude=-122.4062595),
        Court(name='Holly Park', address='625 Holly Park Cir, San Francisco, CA 94110', latitude=37.7369294, longitude=-122.4204963),
        Court(name='Angelo J Rossi Playground', address='600 Arguello Blvd, San Francisco, CA 94118', latitude=37.77942865, longitude=-122.45774677),
        Court(name='Jackson Playground', address='17th St & Arkansas St, San Francisco, CA 94107', latitude=37.763881524, longitude=-122.400189),
        Court(name='Frances M McAteer', address='San Francisco, CA', latitude=37.73607, longitude=-122.47816),
        Court(name='Sunset Recreation', address='2201 Lawton St, San Francisco, CA 94122', latitude=37.7568065, longitude=-122.487155329),
        Court(name='Noe Valley', address='24th St, San Francisco, CA 94114', latitude=37.7512, longitude=-122.4393),
        Court(name='Alta Plaza', address='2499 Steiner St, San Francisco, CA 94115', latitude=37.79226, longitude=-122.43625),
        Court(name='Glen Park', address='62 Elk St, San Francisco, CA 94131', latitude=37.73611, longitude=-122.43978),
        Court(name='Balboa Park', address='San Jose Avenue, San Francisco, CA 94112', latitude=37.7253, longitude=-122.4431),
        Court(name='Moscone Recreation Center', address='1800 Chestnut St, San Francisco, California 94123', latitude=37.7971, longitude=-122.4483)
    ]

    db.session.add_all(seed)
    db.session.commit()


def undo_courts():
    db.session.execute('TRUNCATE courts CASCADE;')
    db.session.commit()
