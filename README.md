# 📊 Jawahar Navodaya Vidyalaya (JNV) Data Analysis & Mapping Project

An end-to-end data analysis and visualization project that maps **653 Jawahar Navodaya Vidyalayas (JNVs)** across India and derives insights from psychometric and educational datasets. The project provides district-wise, region-wise, and demographic-wise analysis along with a live interactive map and dashboards.

## 🗂️ Project Structure

- **Data Collection**: API extraction from UDISE+ portal.
- **Data Cleaning**: Standardizing districts, reshaping the dataset.
- **Data Merge**: Linking JNV datasets with student psychometric datasets.
- **Exploratory Data Analysis (EDA)**: Age, gender, region patterns.
- **Interest & Abilities Mapping**: Holland Codes + Aptitude clusters.
- **Power BI Dashboard**: Visual representation of outcomes.

---

## 🔗 Live Tools

- 🌍 **JNV Map** (React + Google Maps API):  
  Hosted on Netlify → [https://jnvmap.netlify.app/](https://jnvmap.netlify.app/)

- 📑 **Full Analysis Document (Google Docs)**:  
  [JNV Psychometric & Demographic Analysis Report](https://docs.google.com/document/d/131PG3HHTdF2GdG_S0-_kRmmAXH0lAvN33oBfN2I5l3I/edit?usp=sharing)



---

## 🚀 Key Highlights

- 🔍 Extracted 653 JNVs through API automation.
- 🧹 Cleaned and merged 2 independent datasets (institutional + psychometric).
- 🗺️ Mapped schools interactively by Latitude/Longitude.
- 📈 Analyzed Personality, Interests, and Abilities across age, grade, district, and region.
- 👩‍🏫 Provided insights to help align student traits with career pathways.

---

## 🛠️ Tech Stack

| Layer                   | Technologies Used                          |
|------------------------|---------------------------------------------|
| Data Extraction        | Python, API calls (UDISE+ portal)           |
| Data Processing        | Pandas, NumPy                               |
| Visualization          | Power BI, Matplotlib, Seaborn               |
| Frontend Map App       | React, Next.js, Google Maps API             |
| Deployment             | Netlify                                     |

---



---

## 📘 Documentation

Full project phases are explained in detail, including:

- Data pipeline creation
- API reverse engineering
- Psychometric data transformations
- Region-wise traits summary
- Interest and career mapping

Read full doc:  
🔗 [JNV Project Full Report (PDF)](https://docs.google.com/document/d/131PG3HHTdF2GdG_S0-_kRmmAXH0lAvN33oBfN2I5l3I/edit?usp=sharing)

---

## 📁 Repository Structure

```plaintext
|-- data/                      # Raw and cleaned datasets
|-- notebooks/                 # Jupyter analysis notebooks
|-- src/                       # Scripts for API extraction, cleaning, merging
|-- dashboard/                 # Power BI files
|-- frontend/                  # React code for JNV map
|-- docs/                      # PDFs and presentations
|-- README.md
