import pprint

pp = pprint.PrettyPrinter()


def printer(msg):
    print('\n'*2)
    print('-'*12)
    pp.pprint(msg)
    print('-'*12)
