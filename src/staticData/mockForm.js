const MOCK_FORM = {
  "ok": true,
  "data": {
    "form": {
      "id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
      "name": "Veterans United Screening",
      "is_active": true,
      "sections": [
        {
          "id": "731b0afe-8313-4358-9a01-c26670c8a6a4",
          "name": "First Section",
          "display_name": true,
          "display_order": "1",
          "form_id": "",
          "type": "FORM_GROUP",
          "questions": [
            {
              "id": "1e3f1998-8d29-4fb6-a459-668362ff34e6",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "How many times have you received care in an emergency department over the last 12 months? (if you are in the emergency department now, please count your current visit)",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "912ee356-4710-11e8-b399-b200d46a0501",
                  "option_label": "2 or more times",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "fdb84222-d937-432d-a233-921d4bbea261",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "1e3f1998-8d29-4fb6-a459-668362ff34e6",
                    "input_option_id": "912ee356-4710-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "HIGH_RISK",
                    "define_value": ""
                  }
                },
                {
                  "id": "7b91ad2c-4710-11e8-b399-b200d46a0501",
                  "option_label": "1 time",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "65ed43ea-3ef9-4ac0-ab6b-33649e1d5c94",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "1e3f1998-8d29-4fb6-a459-668362ff34e6",
                    "input_option_id": "7b91ad2c-4710-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "NO_RISK",
                    "define_value": ""
                  }
                },
                {
                  "id": "67155885-4710-11e8-b399-b200d46a0501",
                  "option_label": "0 times",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "89d8f207-bef7-4179-937c-148f930b48e1",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "1e3f1998-8d29-4fb6-a459-668362ff34e6",
                    "input_option_id": "67155885-4710-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "NO_RISK",
                    "define_value": ""
                  }
                }
              ],
              "validators": [
                {
                  "id":"3a09d350-14f2-405b-bf71-81698c5bc048",
                  "validation_type":"presence",
                  "message":"is required",
                }
              ],
              "conditional_display": null,
              "directive": {
                "id": "7a48b1ac-609e-4366-9338-2fe67c011045",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "1e3f1998-8d29-4fb6-a459-668362ff34e6",
                "type": "DEFINE_RISK",
                "format": "SINGLE_CHOICE",
                "operator": "",
                "bucket": "",
                "question_position": "1",
                "total_questions": "1"
              }
            },
            {
              "id": "54d460ef-4e6a-4e56-822d-a42469fc8fd3",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "What is your housing situation today?",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "674b23c8-4726-11e8-b399-b200d46a0501",
                  "option_label": "I have housing",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "48e53d2f-96bd-4ef3-9570-9ca87296e9e9",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "54d460ef-4e6a-4e56-822d-a42469fc8fd3",
                    "input_option_id": "674b23c8-4726-11e8-b399-b200d46a0501",
                    "define_need": "no_need",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "3f7ba3bb-4726-11e8-b399-b200d46a0501",
                  "option_label": "I have housing today, but I am worried about losing housing in the future.",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "05f428b2-227e-4872-968b-a7827fbac6fe",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "54d460ef-4e6a-4e56-822d-a42469fc8fd3",
                    "input_option_id": "3f7ba3bb-4726-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "9ab35214-4725-11e8-b399-b200d46a0501",
                  "option_label": "I do not have housing (I am staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, abandoned building, bus or train station, or in a park)",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "0ddbe0d3-8a92-4b08-b12d-911795efa194",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "54d460ef-4e6a-4e56-822d-a42469fc8fd3",
                    "input_option_id": "9ab35214-4725-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "058ac63d-1e0f-494c-aaec-dcb9f0b05d31",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "54d460ef-4e6a-4e56-822d-a42469fc8fd3",
                "type": "DEFINE_NEED",
                "format": "AGGREGATE",
                "operator": "one_of",
                "bucket": "need/housing",
                "question_position": "1",
                "total_questions": "2"
              }
            },
            {
              "id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "Think about the place you live. Do you have problems with any of the following? ",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "20",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "e19e3172-4727-11e8-b399-b200d46a0501",
                  "option_label": "None of the above",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "a5c43cb8-2ecd-4dde-97d7-e61eb9f1be33",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                    "input_option_id": "e19e3172-4727-11e8-b399-b200d46a0501",
                    "define_need": "no_need",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "d23feb8e-4727-11e8-b399-b200d46a0501",
                  "option_label": "Water leaks",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "8c9a3d51-a7f4-498f-bf2c-ac7387f9bcf0",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                    "input_option_id": "d23feb8e-4727-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "c49c77a5-4727-11e8-b399-b200d46a0501",
                  "option_label": "No or not working smoke detectors",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "4413b517-0773-4b03-b979-e9eeb8ab5a02",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                    "input_option_id": "c49c77a5-4727-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "9d4f618d-4727-11e8-b399-b200d46a0501",
                  "option_label": "Oven or stove not working",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "98a7cfa7-5ab9-4969-b12a-dcb580611847",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                    "input_option_id": "9d4f618d-4727-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "793f2da8-4727-11e8-b399-b200d46a0501",
                  "option_label": "Inadequate heat",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "b1dfc3cd-a95d-4405-bd3c-bf801b0abed6",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                    "input_option_id": "793f2da8-4727-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "4de4a786-4727-11e8-b399-b200d46a0501",
                  "option_label": "Lead paint or pipes",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "2ced4a6f-1b19-41fb-8b85-d4edd7d06532",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                    "input_option_id": "4de4a786-4727-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "3a09874d-4727-11e8-b399-b200d46a0501",
                  "option_label": "Mold",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "85d4252b-745a-4a9d-94f0-efb9245fc37b",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                    "input_option_id": "3a09874d-4727-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "232f4987-4727-11e8-b399-b200d46a0501",
                  "option_label": "Bug infestation",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "61a929bb-fb01-4330-8943-1798daee1948",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                    "input_option_id": "232f4987-4727-11e8-b399-b200d46a0501",
                    "define_need": "housing",
                    "define_risk": "",
                    "define_value": ""
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "731b0afe-8313-4358-9a01-c26670c8a6a4",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "9bb3442b-bbce-4e82-a283-2e24a89dfb11",
                "type": "DEFINE_NEED",
                "format": "AGGREGATE",
                "operator": "one_of",
                "bucket": "need/housing",
                "question_position": "2",
                "total_questions": "2"
              }
            },
            {
              "id": "c2e987d3-cad0-49d5-8501-3282fc49298e",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "Within the past 12 months, you worried that your food would run out before you go money to buy more?",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "54323e88-4735-11e8-b399-b200d46a0501",
                  "option_label": "Never true",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "e6e5e87f-9387-4eca-96da-2fb3b7b422ab",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "c2e987d3-cad0-49d5-8501-3282fc49298e",
                    "input_option_id": "54323e88-4735-11e8-b399-b200d46a0501",
                    "define_need": "no_need",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "3d6475d6-4735-11e8-b399-b200d46a0501",
                  "option_label": "Sometimes true",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "19843e92-377e-491b-9185-659c7ab42d24",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "c2e987d3-cad0-49d5-8501-3282fc49298e",
                    "input_option_id": "3d6475d6-4735-11e8-b399-b200d46a0501",
                    "define_need": "food",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "2ede45fe-4735-11e8-b399-b200d46a0501",
                  "option_label": "Often true",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "0afbd10a-f647-4543-b41e-4839368696a7",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "c2e987d3-cad0-49d5-8501-3282fc49298e",
                    "input_option_id": "2ede45fe-4735-11e8-b399-b200d46a0501",
                    "define_need": "food",
                    "define_risk": "",
                    "define_value": ""
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "ebf35c31-7f2f-4ca7-bcdd-75a1fd5a9aa0",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "c2e987d3-cad0-49d5-8501-3282fc49298e",
                "type": "DEFINE_NEED",
                "format": "AGGREGATE",
                "operator": "one_of",
                "bucket": "need/food",
                "question_position": "1",
                "total_questions": "2"
              }
            },
            {
              "id": "571fbf94-0bd8-48b1-ace3-b49104006891",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "Within the past 12 months, the food you bought just didn't last and you didn't have money to get more.",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "7996ca45-4735-11e8-b399-b200d46a0501",
                  "option_label": "Never true",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "7a765498-0ad3-4038-b65a-ca7522e2bd63",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "c2e987d3-cad0-49d5-8501-3282fc49298e",
                    "input_option_id": "7996ca45-4735-11e8-b399-b200d46a0501",
                    "define_need": "no_need",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "7258cd57-4735-11e8-b399-b200d46a0501",
                  "option_label": "Sometimes true",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "cd4e6ec3-e214-471e-ae43-0defffab7bb5",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "c2e987d3-cad0-49d5-8501-3282fc49298e",
                    "input_option_id": "7258cd57-4735-11e8-b399-b200d46a0501",
                    "define_need": "food",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "6b4caf09-4735-11e8-b399-b200d46a0501",
                  "option_label": "Often true",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "f5708aef-f2fb-485e-aec1-6b4b4a69578b",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "c2e987d3-cad0-49d5-8501-3282fc49298e",
                    "input_option_id": "6b4caf09-4735-11e8-b399-b200d46a0501",
                    "define_need": "food",
                    "define_risk": "",
                    "define_value": ""
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "5fdbc248-d9db-4905-a488-cb417acdc128",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "571fbf94-0bd8-48b1-ace3-b49104006891",
                "type": "DEFINE_NEED",
                "format": "AGGREGATE",
                "operator": "one_of",
                "bucket": "need/food",
                "question_position": "2",
                "total_questions": "2"
              }
            },
            {
              "id": "ff80af51-f258-4dce-a559-dae5d8c68431",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "In the past 12 months, has lack of transportation kept you from medical appointments, meetings, work or from getting to things needed for daily living? (Check all that apply)",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "db65173e-47cc-11e8-b399-b200d46a0501",
                  "option_label": "No",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "c9de0e16-a9bb-4d01-94c6-36d867c57563",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "ff80af51-f258-4dce-a559-dae5d8c68431",
                    "input_option_id": "db65173e-47cc-11e8-b399-b200d46a0501",
                    "define_need": "no_need",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "d26b8e1e-47cc-11e8-b399-b200d46a0501",
                  "option_label": "Yes, it has kept me from non-medical meetings, appointments, work, or getting to things that I need",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "7ba6d9ec-2c95-4b3d-8ca3-e56b9cb62c96",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "ff80af51-f258-4dce-a559-dae5d8c68431",
                    "input_option_id": "d26b8e1e-47cc-11e8-b399-b200d46a0501",
                    "define_need": "transportation",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "c002c218-47cc-11e8-b399-b200d46a0501",
                  "option_label": "Yes, it has kept me from medical appointments or getting medications",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "454592df-5f97-4ef1-bbca-dd66268be24f",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "ff80af51-f258-4dce-a559-dae5d8c68431",
                    "input_option_id": "c002c218-47cc-11e8-b399-b200d46a0501",
                    "define_need": "transportation",
                    "define_risk": "",
                    "define_value": ""
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "7c1fb3d5-39a3-42c5-bdb1-c9a5915ff8bb",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "ff80af51-f258-4dce-a559-dae5d8c68431",
                "type": "DEFINE_NEED",
                "format": "MULTIPLE_CHOICE",
                "operator": "",
                "bucket": "",
                "question_position": "1",
                "total_questions": "1"
              }
            },
            {
              "id": "052901d9-cd3d-4019-af1a-b4a1c65440e1",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "In the past 12 months has the electric, gas, oil, or water company threatened to shut off services in your home?",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "91506574-47d1-11e8-b399-b200d46a0501",
                  "option_label": "Already shut off",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "b2964aa9-b653-4752-9afe-f6f12927992a",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "052901d9-cd3d-4019-af1a-b4a1c65440e1",
                    "input_option_id": "91506574-47d1-11e8-b399-b200d46a0501",
                    "define_need": "utilities",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "86364e0e-47d1-11e8-b399-b200d46a0501",
                  "option_label": "No",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "24f297a5-cbb2-4a62-bd71-bd0bb8643332",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "052901d9-cd3d-4019-af1a-b4a1c65440e1",
                    "input_option_id": "86364e0e-47d1-11e8-b399-b200d46a0501",
                    "define_need": "no_need",
                    "define_risk": "",
                    "define_value": ""
                  }
                },
                {
                  "id": "7b30c20d-47d1-11e8-b399-b200d46a0501",
                  "option_label": "Yes",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "3aa72d60-7c21-461b-b80c-a6d39a3911ce",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "052901d9-cd3d-4019-af1a-b4a1c65440e1",
                    "input_option_id": "7b30c20d-47d1-11e8-b399-b200d46a0501",
                    "define_need": "utilities",
                    "define_risk": "",
                    "define_value": ""
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "8b83e168-ab37-4ee5-bd2a-4dbab9371726",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "052901d9-cd3d-4019-af1a-b4a1c65440e1",
                "type": "DEFINE_NEED",
                "format": "SINGLE_CHOICE",
                "operator": "",
                "bucket": "",
                "question_position": "1",
                "total_questions": "1"
              }
            },
            {
              "id": "bb7cbfe2-f8a1-4b0c-bbb3-2402098f15f4",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "How often does anyone, including family, physically hurt you?",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "9bf9feba-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Frequently",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "7c1fb3d5-39a3-42c5-bdb1-c9a5915ff8bb",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "bb7cbfe2-f8a1-4b0c-bbb3-2402098f15f4",
                    "input_option_id": "9bf9feba-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"4\"}"
                  }
                },
                {
                  "id": "8f707497-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Fairly often",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "d46ed14a-763f-444b-8a30-c43407bdcee8",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "bb7cbfe2-f8a1-4b0c-bbb3-2402098f15f4",
                    "input_option_id": "8f707497-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"3\"}"
                  }
                },
                {
                  "id": "88f3a091-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Sometimes",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "fe59211b-51ca-413b-b200-c0304fb4fc37",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "bb7cbfe2-f8a1-4b0c-bbb3-2402098f15f4",
                    "input_option_id": "88f3a091-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"2\"}"
                  }
                },
                {
                  "id": "8364712a-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Rarely",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "8b83e168-ab37-4ee5-bd2a-4dbab9371726",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "bb7cbfe2-f8a1-4b0c-bbb3-2402098f15f4",
                    "input_option_id": "8364712a-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"1\"}"
                  }
                },
                {
                  "id": "792ef15a-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Never",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "ec667a19-5402-46ff-8fc5-30f4a3b6009b",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "bb7cbfe2-f8a1-4b0c-bbb3-2402098f15f4",
                    "input_option_id": "792ef15a-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"0\"}"
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "b2964aa9-b653-4752-9afe-f6f12927992a",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "bb7cbfe2-f8a1-4b0c-bbb3-2402098f15f4",
                "type": "DEFINE_NEED",
                "format": "AGGREGATE",
                "operator": "sum",
                "bucket": "need/safety",
                "question_position": "1",
                "total_questions": "4"
              }
            },
            {
              "id": "f6ad71a3-2efa-4c3f-87aa-8ac77791ddeb",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "How often does anyone, including family, insult or talk down to you?",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "d98fcb62-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Frequently",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "0b05f205-af5b-4ac4-b6f5-d2c215c7055a",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "f6ad71a3-2efa-4c3f-87aa-8ac77791ddeb",
                    "input_option_id": "d98fcb62-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"4\"}"
                  }
                },
                {
                  "id": "d42964d9-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Fairly often",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "e1579c54-cc7f-4c11-a2ad-6bf671e1aefa",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "f6ad71a3-2efa-4c3f-87aa-8ac77791ddeb",
                    "input_option_id": "d42964d9-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"3\"}"
                  }
                },
                {
                  "id": "cd68b90b-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Sometimes",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "711f2650-e501-49ab-9e49-997a92447828",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "f6ad71a3-2efa-4c3f-87aa-8ac77791ddeb",
                    "input_option_id": "cd68b90b-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"2\"}"
                  }
                },
                {
                  "id": "c826abdd-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Rarely",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "c8777231-45b9-4b47-a7b8-9e0c4b65966d",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "f6ad71a3-2efa-4c3f-87aa-8ac77791ddeb",
                    "input_option_id": "c826abdd-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"1\"}"
                  }
                },
                {
                  "id": "bfe71daa-47d5-11e8-b399-b200d46a0501",
                  "option_label": "Never",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "0939e6c8-634f-4357-9589-13fe21ac6591",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "f6ad71a3-2efa-4c3f-87aa-8ac77791ddeb",
                    "input_option_id": "bfe71daa-47d5-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"0\"}"
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "256c181f-7604-40b7-9fe8-19529e876aac",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "f6ad71a3-2efa-4c3f-87aa-8ac77791ddeb",
                "type": "DEFINE_NEED",
                "format": "AGGREGATE",
                "operator": "sum",
                "bucket": "need/safety",
                "question_position": "2",
                "total_questions": "4"
              }
            },
            {
              "id": "ec667a19-5402-46ff-8fc5-30f4a3b6009b",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "How often does anyone, including family, threaten you with harm?",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "43b48544-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Frequently",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "515d5985-d708-45c2-b67a-f8904451ec55",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "ec667a19-5402-46ff-8fc5-30f4a3b6009b",
                    "input_option_id": "43b48544-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"4\"}"
                  }
                },
                {
                  "id": "3c81d499-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Fairly often",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "786cb455-4261-4ef7-a3b1-f529e1a03c76",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "ec667a19-5402-46ff-8fc5-30f4a3b6009b",
                    "input_option_id": "3c81d499-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"3\"}"
                  }
                },
                {
                  "id": "35e9b701-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Sometimes",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "052901d9-cd3d-4019-af1a-b4a1c65440e1",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "ec667a19-5402-46ff-8fc5-30f4a3b6009b",
                    "input_option_id": "35e9b701-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"2\"}"
                  }
                },
                {
                  "id": "2fe4200c-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Rarely",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "8b3fb8c5-0f29-4799-bfaa-f72c7a827eda",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "ec667a19-5402-46ff-8fc5-30f4a3b6009b",
                    "input_option_id": "2fe4200c-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"1\"}"
                  }
                },
                {
                  "id": "2899cf92-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Never",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "c553224f-14c5-4d78-bea5-ef6b1115eb3b",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "ec667a19-5402-46ff-8fc5-30f4a3b6009b",
                    "input_option_id": "2899cf92-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"0\"}"
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "b18b2119-2602-4f53-a1e3-a7bcab7a6194",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "ec667a19-5402-46ff-8fc5-30f4a3b6009b",
                "type": "DEFINE_NEED",
                "format": "AGGREGATE",
                "operator": "sum",
                "bucket": "need/safety",
                "question_position": "3",
                "total_questions": "4"
              }
            },
            {
              "id": "30c69744-5651-47cf-8961-6eef0740da24",
              "base_question_id": "bfc87495-2df3-4060-beb6-764c8d1030fa",
              "label_text": "How often does anyone, including family, scream or curse at you?",
              "placeholder_text": "",
              "help_text": "",
              "help_text_position": "BEFORE_INPUT",
              "display_order": "0",
              "min_selections": "0",
              "max_selections": "0",
              "is_required": false,
              "input_type": "select",
              "css_classes": [],
              "input_options": [
                {
                  "id": "87ab6d60-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Frequently",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "72ec51ff-829e-4d1c-b61e-cb737f1bd3aa",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "30c69744-5651-47cf-8961-6eef0740da24",
                    "input_option_id": "87ab6d60-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"4\"}"
                  }
                },
                {
                  "id": "8337593d-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Fairly often",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "d7ed7312-6361-4fac-9444-e23093ecfa25",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "30c69744-5651-47cf-8961-6eef0740da24",
                    "input_option_id": "8337593d-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"3\"}"
                  }
                },
                {
                  "id": "7da96a8e-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Sometimes",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "47eac05e-857e-4e81-a49c-2e97a07feff9",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "30c69744-5651-47cf-8961-6eef0740da24",
                    "input_option_id": "7da96a8e-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"2\"}"
                  }
                },
                {
                  "id": "79974878-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Rarely",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "3a9f3892-bda4-4147-80b6-982866838e04",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "30c69744-5651-47cf-8961-6eef0740da24",
                    "input_option_id": "79974878-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"1\"}"
                  }
                },
                {
                  "id": "7528a25f-47d6-11e8-b399-b200d46a0501",
                  "option_label": "Never",
                  "display_order": "1",
                  "screening_point_value": 0,
                  "directive": {
                    "id": "c5d4406a-41c6-4725-bceb-9d8184b220db",
                    "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                    "question_id": "30c69744-5651-47cf-8961-6eef0740da24",
                    "input_option_id": "7528a25f-47d6-11e8-b399-b200d46a0501",
                    "define_need": "",
                    "define_risk": "",
                    "define_value": "{\"value\": \"0\"}"
                  }
                }
              ],
              "validators": [],
              "conditional_display":{
                "show_or_hide":"show",
                "and_conditions":[
                  {
                    "operator":"is",
                    "operator_value":"2 or more times",
                    "question_id":"1e3f1998-8d29-4fb6-a459-668362ff34e6",
                  }
                ],
                "or_conditions":[

                ],
              },
              "directive": {
                "id": "30c69744-5651-47cf-8961-6eef0740da24",
                "form_id": "15c943dd-d330-4799-9c6d-7d4a772d5a4a",
                "question_id": "30c69744-5651-47cf-8961-6eef0740da24",
                "type": "DEFINE_NEED",
                "format": "AGGREGATE",
                "operator": "sum",
                "bucket": "need/safety",
                "question_position": "4",
                "total_questions": "4"
              }
            }
          ]
        }
      ]
    }
  },
  "messages": []
};

export default MOCK_FORM;
