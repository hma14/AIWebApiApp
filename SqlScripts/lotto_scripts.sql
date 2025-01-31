 
select * from [dbo].[LottoTypes] where LottoName=1 order by DrawNumber desc

select drawNumber, FORMAT(DrawDate, 'yyy-MM-dd') as drawDate from [dbo].[LottoTypes] where LottoName=1 order by DrawNumber desc

---

select lt.DrawNumber, 
FORMAT(lt.DrawDate, 'yyy-MM-dd') as drawDate, 
nu.Value as Number, 
nu.Distance, nu.IsHit, 
nu.NumberofDrawsWhenHit, 
nu.IsBonusNumber, 
nu.TotalHits

from [dbo].[LottoTypes] as lt 
inner join [dbo].[Numbers] as nu on lt.Id = nu.LottoTypeId
where lt.LottoName=1

order by lt.DrawNumber desc


---

select * from [dbo].[Numbers] where LottoTypeId='85EFB6D7-0F2C-4364-A8AC-501BB6E3E859' order by value


---

select Value as Number, Distance, IsHit, NumberofDrawsWhenHit, IsBonusNumber, TotalHits, Probability 
from [dbo].[Numbers] where LottoTypeId='85EFB6D7-0F2C-4364-A8AC-501BB6E3E859' 
order by value

---

---

select * from [dbo].[BC49] order by DrawDate

---


select * from [dbo].[LottoTypes] where LottoName=1 order by DrawDate desc

select * from [dbo].[Numbers] where LottoTypeId='14CD25CB-472A-412E-B33E-021BEE420D87' order by value



select count(n.Id) from [dbo].[LottoTypes] t
inner join [dbo].[Numbers] n on n.LottoTypeId = t.Id
where t.LottoName=1
group by n.LottoTypeId
--order by t.DrawDate desc


select DrawNumber, 
FORMAT(DrawDate, 'yyy-MM-dd') as drawDate, Number1, Number2, Number3, Number4, Number5, Number6, Bonus
from [dbo].[BC49] order by DrawDate desc
