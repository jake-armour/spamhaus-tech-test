[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jake-armour_spamhaus-tech-test&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=jake-armour_spamhaus-tech-test)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jake-armour_spamhaus-tech-test&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jake-armour_spamhaus-tech-test)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jake-armour_spamhaus-tech-test&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jake-armour_spamhaus-tech-test)
[![codecov](https://codecov.io/gh/jake-armour/spamhaus-tech-test/branch/main/graph/badge.svg?token=SEKKFUDJXB)](https://codecov.io/gh/jake-armour/spamhaus-tech-test)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=jake-armour_spamhaus-tech-test&metric=bugs)](https://sonarcloud.io/summary/new_code?id=jake-armour_spamhaus-tech-test)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=jake-armour_spamhaus-tech-test&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=jake-armour_spamhaus-tech-test)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jake-armour_spamhaus-tech-test&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=jake-armour_spamhaus-tech-test)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jake-armour_spamhaus-tech-test&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=jake-armour_spamhaus-tech-test)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=jake-armour_spamhaus-tech-test&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=jake-armour_spamhaus-tech-test)

# Frontend Tech Exercise

This is my submission for the Frontend tech exercise for SpamHaus.

## Achieved

- Users table with actions for edit/delete
  - Support for pagination and sorting
  - Added icons in for countries to make it a bit more user friendly
- Page for editing users
- CRUD functionality for users
- Routing for all pages
- Some typing
- Some tests
- SonarCloud code analysis

## What I would do with more time

I think that I could've done more with code quality (mainly testing and typing) but, not wanting to spend too much time on this exercise, I believe that I have added some exampled on how I would go about it for this sort of code in production.

I have kept the design very simplistic, maybe too simplistic, but it keeps in line with material design so allows for easy user experience as it is quite self-explanatory and recognisable to users.

The code in this repository could also benefit from some more abstraction, an example would be the user and country table sharing very similar VDataTable code, which could be moved into a shared Table component.
