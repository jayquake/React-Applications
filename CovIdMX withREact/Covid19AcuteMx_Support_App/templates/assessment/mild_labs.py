import json


def create_database(dst_file='mild_labs.json'):
    data = [
        {
            'name': 'CBC with diff',
        },

        {
            'name': 'Lymphocyte count & %',
        },

        {
            'name': 'Plt ',
        },

        {
             'name': 'Hgb'
        },

        {
            'name': 'Plt '
        },

        {
            'name': 'CMP '
        },

        {
             'name': 'LFT (AST/ALT, Bili) '
        },

        {
            'name': 'RFT (Urea/BUN + Cr) '
        },

        {
            'name': 'ABG/VBG) '
        },

        {
             'name': 'Hgb'
        },

        {
             'name': 'CRP, ESR '
        },

        {
             'name': 'D-Dimer'
        },

        {
            'name': 'SARS-CoV-2 '
        },
    ]
    with open(dst_file, 'w') as f:
        json.dump(data, f)


def load_database(src_file='mild_labs.json'):
    with open(src_file, 'r') as f:
        data = json.load(f)
    return data