const employeesMock =
  [
    {
      'id': '14cdc1f2-ed56-4f6c-a03d-255d20656f10',
      'first_name': 'Carri',
      'last_name': 'Thorbon',
      'Job_title': 'Administrative Officer',
      'salary': '2660',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/nihilblanditiiset.bmp?size=50x50&set=set1'
    },
    {
      'id': '642b6057-5761-4981-8474-f3fb8d662176',
      'first_name': 'Felike',
      'last_name': 'Halm',
      'Job_title': 'Chief Design Engineer',
      'salary': '3837',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/aliquidlaboreaut.bmp?size=50x50&set=set1'
    },
    {
      'id': '3fc7f544-bccd-4292-b218-eb92acae6f07',
      'first_name': 'Sheff',
      'last_name': 'Schwander',
      'Job_title': 'Systems Administrator I',
      'salary': '6237',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/atquequiacum.bmp?size=50x50&set=set1'
    },
    {
      'id': 'a64e3a74-907f-49c7-8e2f-1489fb23e1e3',
      'first_name': 'Maire',
      'last_name': 'Suffe',
      'Job_title': 'Marketing Assistant',
      'salary': '9335',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/quiducimusquia.jpg?size=50x50&set=set1'
    },
    {
      'id': 'e196fb61-8948-494e-92b2-d98f5132fdd6',
      'first_name': 'Silva',
      'last_name': 'Deare',
      'Job_title': 'Financial Advisor',
      'salary': '8940',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/quaeratpariatursed.png?size=50x50&set=set1'
    },
    {
      'id': '3d3baf5c-05ab-4d2e-8fb7-760acf344210',
      'first_name': 'Kaleb',
      'last_name': 'Garling',
      'Job_title': 'VP Accounting',
      'salary': '1361',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/dolornihilsed.png?size=50x50&set=set1'
    },
    {
      'id': '3fb0f611-6185-44fb-bddc-2762f850e1df',
      'first_name': 'Romy',
      'last_name': 'Scorah',
      'Job_title': 'Quality Control Specialist',
      'salary': '8179',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/sedetab.jpg?size=50x50&set=set1'
    },
    {
      'id': '8e4835f8-c845-4add-9aee-d77bd6c3beb3',
      'first_name': 'Sherrie',
      'last_name': 'Fallen',
      'Job_title': 'Registered Nurse',
      'salary': '3030',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/nobisperspiciatisut.jpg?size=50x50&set=set1'
    },
    {
      'id': '5e5131e8-d83a-4921-a33c-a584da260f52',
      'first_name': 'Xylia',
      'last_name': 'McGurn',
      'Job_title': 'Social Worker',
      'salary': '5731',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/nonatquesed.jpg?size=50x50&set=set1'
    },
    {
      'id': '4139e76b-18df-45dc-a2f0-49ca52eff1b6',
      'first_name': 'Car',
      'last_name': 'Domotor',
      'Job_title': 'Design Engineer',
      'salary': '1223',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/eaquiquia.jpg?size=50x50&set=set1'
    },
    {
      'id': '03160d7e-645b-41dc-b6a3-a78836bedc77',
      'first_name': 'Logan',
      'last_name': 'Bourdas',
      'Job_title': 'Account Executive',
      'salary': '5946',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/dignissimosetitaque.png?size=50x50&set=set1'
    },
    {
      'id': '6082bab8-de4e-45db-810f-d96591989874',
      'first_name': 'Sterling',
      'last_name': 'Kohrsen',
      'Job_title': 'Professor',
      'salary': '9156',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/consequaturipsumassumenda.bmp?size=50x50&set=set1'
    },
    {
      'id': 'c922ee32-8209-4d4f-bea2-2714bc6d3e5f',
      'first_name': 'Ritchie',
      'last_name': 'Boyse',
      'Job_title': 'Tax Accountant',
      'salary': '4075',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/eosnostrummagni.png?size=50x50&set=set1'
    },
    {
      'id': '9abb5bcb-3341-49c3-bded-bb01fb0275b8',
      'first_name': 'Bambi',
      'last_name': 'MacKeller',
      'Job_title': 'Senior Quality Engineer',
      'salary': '6055',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/dolorconsequaturquia.bmp?size=50x50&set=set1'
    },
    {
      'id': 'a9ee25e5-a828-4a19-9dc6-33f0ea48411b',
      'first_name': 'Dasi',
      'last_name': 'Picard',
      'Job_title': 'Social Worker',
      'salary': '1529',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/estoptioeos.bmp?size=50x50&set=set1'
    },
    {
      'id': '777d6467-e19a-4032-b865-4014f1818674',
      'first_name': 'Emery',
      'last_name': 'Bakes',
      'Job_title': 'Marketing Assistant',
      'salary': '3378',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/modiexmaiores.bmp?size=50x50&set=set1'
    },
    {
      'id': 'd8816aa1-0af4-48bb-a701-0b00cea635f8',
      'first_name': 'Inger',
      'last_name': 'Turban',
      'Job_title': 'Senior Developer',
      'salary': '8769',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/repellendusvelpariatur.png?size=50x50&set=set1'
    },
    {
      'id': 'aa84c18f-675e-499f-8e38-34d106948697',
      'first_name': 'Tad',
      'last_name': 'Grassin',
      'Job_title': 'Budget/Accounting Analyst I',
      'salary': '1174',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/eosutest.jpg?size=50x50&set=set1'
    },
    {
      'id': 'eb6cd8e8-24cd-4a7a-99b7-568b7aa8dfe4',
      'first_name': 'Delaney',
      'last_name': 'Andries',
      'Job_title': 'Environmental Tech',
      'salary': '6140',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/velabofficia.bmp?size=50x50&set=set1'
    },
    {
      'id': 'ec47e291-12d3-46b9-aac0-c3ba874740b5',
      'first_name': 'Reggie',
      'last_name': 'Woodrough',
      'Job_title': 'Sales Associate',
      'salary': '5095',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/utquamrerum.jpg?size=50x50&set=set1'
    },
    {
      'id': '8ca359a8-85ef-4101-9316-53999f87b73d',
      'first_name': 'Emalia',
      'last_name': 'Shoulders',
      'Job_title': 'Pharmacist',
      'salary': '3557',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/omnissitaccusamus.bmp?size=50x50&set=set1'
    },
    {
      'id': '3ab070b0-50e9-438b-8458-e615215ed82e',
      'first_name': 'Devondra',
      'last_name': 'Beckingham',
      'Job_title': 'Assistant Professor',
      'salary': '1771',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/consequaturpariatursit.bmp?size=50x50&set=set1'
    },
    {
      'id': '6c0b7396-7a7b-4240-9021-241ba350ff5e',
      'first_name': 'Rayna',
      'last_name': 'Thomen',
      'Job_title': 'Food Chemist',
      'salary': '2860',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/deseruntquisquas.jpg?size=50x50&set=set1'
    },
    {
      'id': 'd0856748-3502-4c75-ad64-ae3525c40d68',
      'first_name': 'Kerk',
      'last_name': 'Moyler',
      'Job_title': 'Media Manager I',
      'salary': '3593',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/voluptatemveniamrerum.bmp?size=50x50&set=set1'
    },
    {
      'id': 'd4b5556b-4b9c-44e5-9aff-3b7ca9c8abb8',
      'first_name': 'Dougy',
      'last_name': 'Tidd',
      'Job_title': 'Product Engineer',
      'salary': '7124',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/utaddolores.png?size=50x50&set=set1'
    },
    {
      'id': '9784abee-4163-42e6-aef5-dd2c94c39a3b',
      'first_name': 'Zsa zsa',
      'last_name': 'Rowen',
      'Job_title': 'Recruiting Manager',
      'salary': '5132',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/veldoloribuseius.png?size=50x50&set=set1'
    },
    {
      'id': '5032e5b0-0bac-49d7-8de8-27c15ab6f363',
      'first_name': 'Kristyn',
      'last_name': 'Boyd',
      'Job_title': 'Geologist IV',
      'salary': '6896',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/eacumquedoloremque.bmp?size=50x50&set=set1'
    },
    {
      'id': '4ea9d0ef-ebdf-4103-a98b-227de2460e40',
      'first_name': 'Cull',
      'last_name': 'Maplestone',
      'Job_title': 'Project Manager',
      'salary': '8605',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/doloremquitenetur.bmp?size=50x50&set=set1'
    },
    {
      'id': 'bf354483-3adb-42b7-b107-c48802dbbac7',
      'first_name': 'Codie',
      'last_name': 'Pitson',
      'Job_title': 'Recruiting Manager',
      'salary': '1392',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/sedconsequunturaspernatur.png?size=50x50&set=set1'
    },
    {
      'id': '2e71660d-c1ec-48d4-815f-f73c55f40807',
      'first_name': 'Florian',
      'last_name': 'Jadczak',
      'Job_title': 'Safety Technician I',
      'salary': '6685',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/doloremeosperferendis.png?size=50x50&set=set1'
    },
    {
      'id': '62801c32-6bab-4f55-8ee7-76c8a69773eb',
      'first_name': 'Nicolea',
      'last_name': 'Kelleher',
      'Job_title': 'Environmental Specialist',
      'salary': '6922',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/consequunturreprehenderitalias.png?size=50x50&set=set1'
    },
    {
      'id': '69928450-3453-4e1f-ab97-a2dc41499dc6',
      'first_name': 'Gaylord',
      'last_name': 'Klagge',
      'Job_title': 'VP Sales',
      'salary': '7415',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/teneturporroad.bmp?size=50x50&set=set1'
    },
    {
      'id': 'bc6a02ff-df87-4897-a5ba-520e9e03680f',
      'first_name': 'Tynan',
      'last_name': 'Turford',
      'Job_title': 'Accounting Assistant IV',
      'salary': '3740',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/vitaevoluptatemmollitia.jpg?size=50x50&set=set1'
    },
    {
      'id': '24acaa0b-e2c2-4008-a891-78741191759e',
      'first_name': 'Kate',
      'last_name': 'Aspel',
      'Job_title': 'Software Engineer III',
      'salary': '6882',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/eosdoloribusqui.bmp?size=50x50&set=set1'
    },
    {
      'id': '5168777a-97ae-4adb-900b-2cdbb791a044',
      'first_name': 'Kipp',
      'last_name': 'Swaine',
      'Job_title': 'Recruiter',
      'salary': '1595',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/voluptatesnostrumut.jpg?size=50x50&set=set1'
    },
    {
      'id': '52810910-7ecf-4dd9-adb1-39faf40f5ee0',
      'first_name': 'Simmonds',
      'last_name': 'Fero',
      'Job_title': 'Librarian',
      'salary': '1313',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/abrerummolestias.jpg?size=50x50&set=set1'
    },
    {
      'id': 'c9091a2a-fb8e-47f4-be7d-9bd5c73336e2',
      'first_name': 'Standford',
      'last_name': 'Wretham',
      'Job_title': 'Research Assistant I',
      'salary': '9054',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/laboriosamveritatisnulla.png?size=50x50&set=set1'
    },
    {
      'id': '70f3b3a5-266a-43e8-a33b-13f383b6ea9e',
      'first_name': 'Marris',
      'last_name': 'Flarity',
      'Job_title': 'Desktop Support Technician',
      'salary': '1176',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/etillosint.png?size=50x50&set=set1'
    },
    {
      'id': '04a5a01b-01d6-4a6a-b62d-eeb7f69e8f73',
      'first_name': 'Wendi',
      'last_name': 'Fritschel',
      'Job_title': 'Account Coordinator',
      'salary': '2827',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/dictaquiaccusamus.png?size=50x50&set=set1'
    },
    {
      'id': '5a74fc8d-c991-43fe-9a4f-9c0066eb925c',
      'first_name': 'Filmer',
      'last_name': 'Mobius',
      'Job_title': 'Civil Engineer',
      'salary': '2919',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/rerumcorporisea.bmp?size=50x50&set=set1'
    },
    {
      'id': '9a271856-0334-499b-a4fd-3efc24727999',
      'first_name': 'Morry',
      'last_name': 'Yggo',
      'Job_title': 'Staff Scientist',
      'salary': '7971',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/eumetvoluptas.png?size=50x50&set=set1'
    },
    {
      'id': 'e9ae6b3e-1ea5-4215-9b9c-f480a7fed918',
      'first_name': 'Lorelei',
      'last_name': 'Silcox',
      'Job_title': 'Human Resources Manager',
      'salary': '1809',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/omnisnemoenim.jpg?size=50x50&set=set1'
    },
    {
      'id': '68527a57-b44c-4027-89a8-60f3fad512d8',
      'first_name': 'Pier',
      'last_name': 'Rapa',
      'Job_title': 'Account Representative II',
      'salary': '3187',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/quiteneturminus.jpg?size=50x50&set=set1'
    },
    {
      'id': '474b67f0-850f-4686-8bd6-ce0418925dd5',
      'first_name': 'Tyne',
      'last_name': 'Measor',
      'Job_title': 'Database Administrator IV',
      'salary': '3555',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/omnisquoquam.png?size=50x50&set=set1'
    },
    {
      'id': 'c8dc20ba-40fc-40d7-a89f-953e0fb638ce',
      'first_name': 'Fayre',
      'last_name': 'Mawhinney',
      'Job_title': 'Business Systems Development Analyst',
      'salary': '1421',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/estexercitationemesse.jpg?size=50x50&set=set1'
    },
    {
      'id': '82acbf8f-d6c8-42bf-9bb5-f8264692cc08',
      'first_name': 'Grace',
      'last_name': 'Dolbey',
      'Job_title': 'VP Accounting',
      'salary': '6547',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/estametcorporis.jpg?size=50x50&set=set1'
    },
    {
      'id': '7068d7ab-38c0-482b-af1e-35fcfee3b673',
      'first_name': 'Trever',
      'last_name': 'Kubyszek',
      'Job_title': 'Junior Executive',
      'salary': '1361',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/quieosnatus.bmp?size=50x50&set=set1'
    },
    {
      'id': '21d3162b-dc1a-42ea-bcfc-c6b48d39adb2',
      'first_name': 'Ulla',
      'last_name': 'Kuban',
      'Job_title': 'Business Systems Development Analyst',
      'salary': '4380',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/rationevoluptatemvel.bmp?size=50x50&set=set1'
    },
    {
      'id': 'a18bf9c2-dd50-4d67-b546-de9802a5f29f',
      'first_name': 'Viv',
      'last_name': 'Acres',
      'Job_title': 'Quality Engineer',
      'salary': '7038',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/estdelectusducimus.bmp?size=50x50&set=set1'
    },
    {
      'id': '9d42648b-07fd-4764-b3f6-2527d997e255',
      'first_name': 'Joel',
      'last_name': 'Ortzen',
      'Job_title': 'Desktop Support Technician',
      'salary': '7016',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/consequaturquoscommodi.jpg?size=50x50&set=set1'
    },
    {
      'id': '0fceee01-86e5-4def-8e5d-2f3ae8ac526d',
      'first_name': 'Claudio',
      'last_name': 'Gomm',
      'Job_title': 'Recruiting Manager',
      'salary': '7503',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/aspernaturquodeveniet.jpg?size=50x50&set=set1'
    },
    {
      'id': '3965b9db-cf98-436e-9ffe-55e61c50f4ca',
      'first_name': 'Kayne',
      'last_name': 'Marzellano',
      'Job_title': 'Project Manager',
      'salary': '7792',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/repellendusmaximeofficia.bmp?size=50x50&set=set1'
    },
    {
      'id': 'aa9605db-f0d3-4e20-8478-cd4fd33d8e49',
      'first_name': 'Shepard',
      'last_name': 'Tregunna',
      'Job_title': 'Paralegal',
      'salary': '4492',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/providentvoluptatemexplicabo.png?size=50x50&set=set1'
    },
    {
      'id': '585e75ba-ccf6-49a4-9e97-f590dd392754',
      'first_name': 'Shaw',
      'last_name': 'Nellis',
      'Job_title': 'Mechanical Systems Engineer',
      'salary': '7515',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/aperiamdelectusearum.bmp?size=50x50&set=set1'
    },
    {
      'id': 'f13cce9a-2118-4c42-a01b-010e4f632a7a',
      'first_name': 'Gwennie',
      'last_name': 'Scantlebury',
      'Job_title': 'Budget/Accounting Analyst IV',
      'salary': '8418',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/occaecatiestdolores.bmp?size=50x50&set=set1'
    },
    {
      'id': '66ee910d-03d4-4319-b5be-a7ed2ea1040a',
      'first_name': 'Ashlee',
      'last_name': 'Shearston',
      'Job_title': 'Senior Developer',
      'salary': '3519',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/doloresporrodolore.png?size=50x50&set=set1'
    },
    {
      'id': '9d458751-4dc2-4c75-ba0b-b3caec97dfe1',
      'first_name': 'Ephraim',
      'last_name': 'Romke',
      'Job_title': 'Safety Technician IV',
      'salary': '2780',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/quaequiet.bmp?size=50x50&set=set1'
    },
    {
      'id': 'e4d69a65-dbb5-48ce-8000-35df6b714056',
      'first_name': 'Maiga',
      'last_name': 'Hammerstone',
      'Job_title': 'Software Test Engineer I',
      'salary': '958',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/excepturidolorquia.bmp?size=50x50&set=set1'
    },
    {
      'id': '2105e390-aae5-480e-9ce2-ed73de801d60',
      'first_name': 'Melita',
      'last_name': 'Raynor',
      'Job_title': 'Speech Pathologist',
      'salary': '9235',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/placeatmollitiavoluptatem.jpg?size=50x50&set=set1'
    },
    {
      'id': '17fd7506-cb5a-4181-9362-784ee914b42b',
      'first_name': 'Eleni',
      'last_name': 'Beaglehole',
      'Job_title': 'Speech Pathologist',
      'salary': '1227',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/eiusarchitectoveritatis.png?size=50x50&set=set1'
    },
    {
      'id': 'f0b5849e-c4c8-4851-9ce9-69c4354da654',
      'first_name': 'Levy',
      'last_name': 'Faivre',
      'Job_title': 'Web Designer II',
      'salary': '3893',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/itaqueaveritatis.jpg?size=50x50&set=set1'
    },
    {
      'id': 'fa66dc23-eea9-4b7e-b23c-d1a9cc044d75',
      'first_name': 'Johnath',
      'last_name': 'Frugier',
      'Job_title': 'Food Chemist',
      'salary': '9405',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/laudantiumcumquaerat.bmp?size=50x50&set=set1'
    },
    {
      'id': 'f4c0a34f-f0f8-41f8-955b-27c3d41706cb',
      'first_name': 'Kippy',
      'last_name': 'Spitaro',
      'Job_title': 'Human Resources Assistant IV',
      'salary': '7166',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/estquoaut.bmp?size=50x50&set=set1'
    },
    {
      'id': '1be78a8c-90ac-4bbe-92dc-d93da7a34040',
      'first_name': 'Page',
      'last_name': 'Brearton',
      'Job_title': 'Electrical Engineer',
      'salary': '6802',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/modivelitnihil.jpg?size=50x50&set=set1'
    },
    {
      'id': '7f874917-986d-411a-846e-88e50e3fccb0',
      'first_name': 'Trixi',
      'last_name': 'Greber',
      'Job_title': 'Registered Nurse',
      'salary': '549',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/reiciendiseaquequia.bmp?size=50x50&set=set1'
    },
    {
      'id': 'f476c564-0c9e-4fac-a955-ec3036406160',
      'first_name': 'Esra',
      'last_name': 'Gasparro',
      'Job_title': 'GIS Technical Architect',
      'salary': '3203',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/etnonut.png?size=50x50&set=set1'
    },
    {
      'id': 'ed810395-4d79-4c44-8ee2-2cf2eb67ef45',
      'first_name': 'Agretha',
      'last_name': 'Dmitriev',
      'Job_title': 'Research Assistant II',
      'salary': '8720',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/utsapienteet.png?size=50x50&set=set1'
    },
    {
      'id': '97e77599-60d9-4376-8b69-18f10968ed46',
      'first_name': 'Julio',
      'last_name': 'Beldham',
      'Job_title': 'Occupational Therapist',
      'salary': '8734',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/minusutunde.png?size=50x50&set=set1'
    },
    {
      'id': 'db3dd4d6-df64-42a0-b3b9-4d50c366f7c9',
      'first_name': 'Roderic',
      'last_name': 'Rayment',
      'Job_title': 'Senior Quality Engineer',
      'salary': '3852',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/molestiaeestnemo.bmp?size=50x50&set=set1'
    },
    {
      'id': '31a305ce-fbf4-4577-a843-e546b05911d2',
      'first_name': 'Irene',
      'last_name': 'Burdell',
      'Job_title': 'Web Developer II',
      'salary': '6183',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/laudantiumremsimilique.png?size=50x50&set=set1'
    },
    {
      'id': 'b8d97c91-cdbe-4366-832b-839d12edf46d',
      'first_name': 'Jarrad',
      'last_name': 'Trayton',
      'Job_title': 'Financial Advisor',
      'salary': '8314',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/architectoutaut.jpg?size=50x50&set=set1'
    },
    {
      'id': '6655b92b-2eb9-481a-b40d-4debda6cc139',
      'first_name': 'Hermine',
      'last_name': 'Tewes',
      'Job_title': 'VP Accounting',
      'salary': '6895',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/voluptatumanimirerum.bmp?size=50x50&set=set1'
    },
    {
      'id': 'e4698ece-ac9e-4b35-b756-865cbf662d53',
      'first_name': 'Bailey',
      'last_name': 'Quenby',
      'Job_title': 'Desktop Support Technician',
      'salary': '7219',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/aliasinventoremaxime.bmp?size=50x50&set=set1'
    },
    {
      'id': '09e6cfa9-15ae-4de7-85bf-0efa936016f7',
      'first_name': 'Devin',
      'last_name': 'Brigstock',
      'Job_title': 'Speech Pathologist',
      'salary': '296',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/voluptasanimimagni.png?size=50x50&set=set1'
    },
    {
      'id': '2f158d44-be10-4878-8da1-7ce67a9acaa5',
      'first_name': 'Kizzee',
      'last_name': 'Crispin',
      'Job_title': 'Director of Sales',
      'salary': '9356',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/suscipitsedassumenda.jpg?size=50x50&set=set1'
    },
    {
      'id': 'eb23726c-887d-4743-86ab-e485abc04751',
      'first_name': 'Faun',
      'last_name': 'Callaway',
      'Job_title': 'Statistician IV',
      'salary': '4015',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/eosundenon.jpg?size=50x50&set=set1'
    },
    {
      'id': 'ed155c45-902e-4874-a1b9-f8053d92bdd8',
      'first_name': 'Nance',
      'last_name': 'Shobrook',
      'Job_title': 'Account Coordinator',
      'salary': '7191',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/nemocorporissimilique.jpg?size=50x50&set=set1'
    },
    {
      'id': '9218c0d1-159e-4ce2-aca9-0457b92f83ea',
      'first_name': 'Merell',
      'last_name': 'Stedall',
      'Job_title': 'Administrative Officer',
      'salary': '7601',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/quasquidemmolestias.bmp?size=50x50&set=set1'
    },
    {
      'id': '1772f11d-c342-46af-8c0f-50460c730d3d',
      'first_name': 'Annora',
      'last_name': 'Kondrachenko',
      'Job_title': 'Accounting Assistant I',
      'salary': '8203',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/sitadvelit.jpg?size=50x50&set=set1'
    },
    {
      'id': '8875ee08-ff12-4b08-8bed-58d291fb9c7c',
      'first_name': 'Alaric',
      'last_name': 'Billings',
      'Job_title': 'Accountant III',
      'salary': '4368',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/minimasequihic.png?size=50x50&set=set1'
    },
    {
      'id': '2899ee2d-860c-4e45-8886-512b4fc1911e',
      'first_name': 'Betti',
      'last_name': 'Featherstone',
      'Job_title': 'GIS Technical Architect',
      'salary': '1372',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/voluptatibusperspiciatisquia.png?size=50x50&set=set1'
    },
    {
      'id': 'd6359bec-3e27-4ca5-a7a3-63aee8c6883d',
      'first_name': 'Arlyn',
      'last_name': 'Burree',
      'Job_title': 'Biostatistician III',
      'salary': '1646',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/suntnemocupiditate.png?size=50x50&set=set1'
    },
    {
      'id': '171bf6e8-ca10-43a8-a513-fd7962023ec1',
      'first_name': 'Eartha',
      'last_name': 'Corden',
      'Job_title': 'Speech Pathologist',
      'salary': '4575',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/etcorruptiprovident.bmp?size=50x50&set=set1'
    },
    {
      'id': '00e9cd9a-e4b6-450f-88d9-3364cd22bc05',
      'first_name': 'Guido',
      'last_name': 'Whitcomb',
      'Job_title': 'Analog Circuit Design manager',
      'salary': '2398',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/molestiaealiquamtotam.png?size=50x50&set=set1'
    },
    {
      'id': 'b64f7e53-9573-4720-8039-616d4c697a65',
      'first_name': 'Benito',
      'last_name': 'Flement',
      'Job_title': 'Account Representative II',
      'salary': '3286',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/rationeatqueautem.png?size=50x50&set=set1'
    },
    {
      'id': '03432bf8-77ec-4f85-a456-fe80736514ad',
      'first_name': 'Ewen',
      'last_name': 'Hedgeman',
      'Job_title': 'Nurse',
      'salary': '5153',
      'job_type': 'eventual',
      'active': true,
      'avatar': 'https://robohash.org/porrohicducimus.jpg?size=50x50&set=set1'
    },
    {
      'id': 'd5171b36-e120-4255-ac28-6ee4eaa345ca',
      'first_name': 'Isa',
      'last_name': 'Corpe',
      'Job_title': 'Computer Systems Analyst III',
      'salary': '6973',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/velilloquas.bmp?size=50x50&set=set1'
    },
    {
      'id': 'c4c827e5-df6f-4820-9562-1499be391d26',
      'first_name': 'Karol',
      'last_name': 'Taynton',
      'Job_title': 'Administrative Assistant IV',
      'salary': '8782',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/sedexplicaboest.jpg?size=50x50&set=set1'
    },
    {
      'id': '9b53d98a-9803-4fd7-a7fc-fb84c545d938',
      'first_name': 'Mathe',
      'last_name': 'Wheble',
      'Job_title': 'Geologist I',
      'salary': '697',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/illoplaceatquia.png?size=50x50&set=set1'
    },
    {
      'id': '3cfc8057-37c1-4a89-96f1-cfe08eb2c6c4',
      'first_name': 'Drucy',
      'last_name': 'Yakubowicz',
      'Job_title': 'Food Chemist',
      'salary': '646',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/voluptatemquihic.png?size=50x50&set=set1'
    },
    {
      'id': '76ad8155-3655-4128-bf4c-6ead14607618',
      'first_name': 'Augustina',
      'last_name': 'Posvner',
      'Job_title': 'Professor',
      'salary': '2457',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/eaperspiciatisdebitis.jpg?size=50x50&set=set1'
    },
    {
      'id': '6f2af3bf-3168-4411-bd30-7e6b608e5d49',
      'first_name': 'Hakeem',
      'last_name': 'Evenden',
      'Job_title': 'Civil Engineer',
      'salary': '4301',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/rerumdoloribusdoloremque.png?size=50x50&set=set1'
    },
    {
      'id': '4f508eb1-1ad1-46bc-be19-03bc31a8c381',
      'first_name': 'Larine',
      'last_name': 'Espinha',
      'Job_title': 'Biostatistician I',
      'salary': '3159',
      'job_type': 'partial time',
      'active': false,
      'avatar': 'https://robohash.org/facilisrecusandaenon.bmp?size=50x50&set=set1'
    },
    {
      'id': 'adfd283e-98b6-4a32-8f07-ee42b870c833',
      'first_name': 'Malia',
      'last_name': 'Bust',
      'Job_title': 'Budget/Accounting Analyst I',
      'salary': '8540',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/quosautaut.png?size=50x50&set=set1'
    },
    {
      'id': 'ec101df8-04e7-4f93-abd6-811531ec2e9d',
      'first_name': 'Fitzgerald',
      'last_name': 'Graalman',
      'Job_title': 'Media Manager III',
      'salary': '4568',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/consequaturpraesentiumdicta.png?size=50x50&set=set1'
    },
    {
      'id': 'c0be5ae9-499c-492c-b085-cb4f1585b357',
      'first_name': 'Dareen',
      'last_name': 'McKaile',
      'Job_title': 'VP Quality Control',
      'salary': '2438',
      'job_type': 'eventual',
      'active': false,
      'avatar': 'https://robohash.org/quosestaliquam.jpg?size=50x50&set=set1'
    },
    {
      'id': '575e409d-ec4a-4ea1-b324-249f15a30215',
      'first_name': 'Teodoor',
      'last_name': 'Timmins',
      'Job_title': 'Nuclear Power Engineer',
      'salary': '6959',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/reprehenderitdictaipsam.bmp?size=50x50&set=set1'
    },
    {
      'id': '6699a9e6-38fd-48ad-af32-e4b1cceb11ef',
      'first_name': 'Raven',
      'last_name': 'Sallans',
      'Job_title': 'Senior Financial Analyst',
      'salary': '1069',
      'job_type': 'full time',
      'active': true,
      'avatar': 'https://robohash.org/ideteligendi.bmp?size=50x50&set=set1'
    },
    {
      'id': '3fdab622-7fe7-4883-b21d-92a23ddaad15',
      'first_name': 'Elaina',
      'last_name': 'Kimmel',
      'Job_title': 'Associate Professor',
      'salary': '2155',
      'job_type': 'full time',
      'active': false,
      'avatar': 'https://robohash.org/debitisnonrerum.bmp?size=50x50&set=set1'
    },
    {
      'id': '845b1ece-1282-4de0-a01f-cb499953a432',
      'first_name': 'Eleni',
      'last_name': 'Kruschev',
      'Job_title': 'Recruiter',
      'salary': '653',
      'job_type': 'partial time',
      'active': true,
      'avatar': 'https://robohash.org/perspiciatisvelnostrum.bmp?size=50x50&set=set1'
    }
  ];


module.exports = {
  employeesMock,
};
